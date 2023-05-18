import * as yup from "yup";

export const KeywordsSchema = yup.object().shape({
  keywords: yup.string().required("keywords Required"),
});
