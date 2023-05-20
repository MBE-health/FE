import { AIAxios } from "./index";

export const getSearchAgent = async (keyword: string) => {
  //console.log(data);
  const PREFIX_URL = "/search_rec?";
  try {
    const { data, status } = await AIAxios.get(
      `${PREFIX_URL}keyword=${keyword}`
    );
    return { data, status };
    //return status;
  } catch (err) {
    if (err instanceof Error) {
      // 👉️ err is type Error here
      return { data: null, status: 400 };
    }
    return { data: null, status: 400 };
  }
};

export const getConditionAgent = async (keywords: string) => {
  const PREFIX_URL = "/csv_rec?";
  try {
    const { data, status } = await AIAxios.get(
      `${PREFIX_URL}keywords=${keywords}`
    );
    return { data, status };
    //return status;
  } catch (err) {
    if (err instanceof Error) {
      // 👉️ err is type Error here
      return { data: null, status: 400 };
    }
    return { data: null, status: 400 };
  }
};
