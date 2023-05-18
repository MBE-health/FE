import { FormikValues } from "formik";

// login애 사용되는 유저 정보
export interface LoginUser {
  email: string;
  password: string;
}
export interface SignUpUser {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  nickname: string;
  age: number;
  sex: number;
}

export interface onBoardingProps {
  [index:string]:string;
  typo: string;
  name: string;
  label: string;
  type: string;
  placeholder: string;
  unit: string;
}

export interface healthConditionProps  {
  //측정연령수: number;
  [index: string]: number;
  키: number;
  몸무게: number;
  체지방률: number;
  BMI: number;

  앉아윗몸앞으로굽히기: number;
  교차윗몸일으키기: number;
  왕복오래달리기: number;
  왕복달리기_10M_4회: number;
  제자리_멀리뛰기: number;
  상대악력: number;

  //성별구분코드_F: number;
  //성별구분코드_M: number;
}

export interface exerciseConditionProps {
  [index: string]: string[];
  type: string[];
  body: string[];
  equipment: string[];
  level: string[];
}
export interface sexStateProps {
  //성별구분코드_F: number;
  //성별구분코드_M: number;
}

export interface exerciseProps{
  value:string,
  key:string,
  name:string
}

export interface keywordProps {
  keywords:string
};