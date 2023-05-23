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
  신장: number;
  체중: number;
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
export interface recDataProps {
  ex: recExProps;
  group_num: number;
}

export interface recExProps {
  step_1: stepProps;
  step_2: stepProps;
  step_3: stepProps;
  createdAt?:string;
}

export interface stepProps {
  exercise_list: string[] | string;
  time: number;
}
export interface recResProps {
  data: recDataProps | null;
  status: number;
}

export type selectedPlanProps = recExProps | null


export interface routineDone {
  map(arg0: (item: routineDone) => number): unknown;
  [index: number]: 0 | 1;
  0: 0 | 1;
  1: 0 | 1;
  2: 0 | 1;
  createdAt?: string;
}

export interface userInfoProps {
  id?:string,
  sex:number,
  name:string,
  nickname?:string,
  age:number
}