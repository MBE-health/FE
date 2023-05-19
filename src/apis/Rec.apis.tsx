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

export const getRec = async (
  healthCondition: healthConditionProps,
  isHealthCompleted: boolean
  /*isExerciseCompleted: boolean,
  isKeywordsCompleted: boolean*/
): Promise<recResProps> => {
  try {
    if (healthCondition && isHealthCompleted) {
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