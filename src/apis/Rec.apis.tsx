import { isFemale, isMale } from "../constant/sex";
import { healthConditionProps, recResProps } from "../typings";
import { setHealthCondition } from "./Health.apis";
import { AIAxios } from "./index";

export const aprioriRec = async (healthConditon: healthConditionProps) => {
  const PREFIX_URL = "/non_rec";
  try {
    const age = 50;
    const sex = 0;
    const health = {
      측정연령수: age,
      성별구분코드_F: isFemale(sex),
      성별구분코드_M: isMale(sex),
      ...healthConditon,
    };
    //console.log(health);
    const { data, status } = await AIAxios.post(`${PREFIX_URL}`, health);
    console.log("aprioriRec Api", data, status);
    return { data, status };
  } catch (err) {
    if (err instanceof Error) {
      // 👉️ err is type Error here
      return { data: [], status: 400 };
    }
    return { data: [], status: 400 };
  }
};


export const promptRec = async (
  grade: number,
  search_response: string[],
  csv_response: string[]
) => {
  const PREFIX_URL = "/total_rec";
  const data = {
    keywords_ex: search_response,
    condition_ex: csv_response,
  };
  console.log(data);
  try {
    if (data) {
      const response = await AIAxios.post(`${PREFIX_URL}?grade=${grade}`, data);
      console.log("prompt result", response);
      return response;
    }
  } catch (error) {
    if (error instanceof Error) {
      // 👉️ err is type Error here
      return { data: null, status: 400 };
    }
    return { data: null, status: 400 };
  }
};

export const getRec = async (
  healthCondition: healthConditionProps
  /* isHealthCompleted: boolean
 isExerciseCompleted: boolean,
  isKeywordsCompleted: boolean*/
): Promise<recResProps> => {
  try {
    if (healthCondition) {
      // healthCondition update
      const response = await setHealthCondition(healthCondition);
      console.log(response);
      if (response === 201) {
        // aprior 추천
        const response = await aprioriRec(healthCondition);
        console.log(response);
        return response;
      } else {
        return { data: null, status: 400 };
      }
    }
  } catch (err) {
    if (err instanceof Error) {
      // 👉️ err is type Error here
      return { data: null, status: 400 };
    }
    return { data: null, status: 400 };
  }
  return { data: null, status: 400 };
};


export const getTotalRec = async (
  healthCondition: healthConditionProps,
  search_response: string[],
  csv_response: string[],
  grade: number
): Promise<recResProps> => {
  try {
    if (healthCondition) {
      // healthCondition update
      const response = await setHealthCondition(healthCondition);
      console.log(response);
      if (response === 201) {
        // langchin agent 추천
        const response = await promptRec(grade, search_response, csv_response);
        console.log(response);
        return response!
      } else {
        return { data: null, status: 400 };
      }

    }
  } catch (error) {
    return  { data: null, status: 400 };
  }
  return { data: null, status: 400 };
};




;