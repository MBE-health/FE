import { isFemale, isMale } from "../constant/sex";
import { healthConditionProps } from "../typings";
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
    console.log(health);
    const { data, status } = await AIAxios.post(`${PREFIX_URL}`, health);
    console.log("aprioriRec Api", data, status);
  } catch (err) {
    if (err instanceof Error) {
      // 👉️ err is type Error here
      console.log(err.message);
    }

    console.log("Unexpected error", err);
  }
};
