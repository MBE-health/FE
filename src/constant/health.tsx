/*
{
  "측정연령수": 0,
  "신장": 0,
  "체중": 0,
  "체지방율": 0,
    "BMI": 0,

  "앉아윗몸앞으로굽히기": 0,
  "교차윗몸일으키기": 0,
  "왕복오래달리기": 0,
  "왕복달리기_10M_4회": 0,
  "제자리_멀리뛰기": 0,
  "상대악력": 0,

  "성별구분코드_F": 0,
  "성별구분코드_M": 0
}
*/

import { onBoardingProps } from "../typings";
export const onBoardingStrength: onBoardingProps[] = [
  {
    typo: "앉아 윗몸 앞으로 굽히기 (cm)",
    name: "앉아윗몸앞으로굽히기",
    label: "앉아윗몸앞으로굽히기",
    unit: "cm",
    type: "number",
    placeholder: "앉아 윗몸 앞으로 굽히기 (cm)를 입력해주세요.",
  },
  {
    typo: "교차 윗몸 일으키기 (회)",
    name: "교차윗몸일으키기",
    label: "교차윗몸일으키기",
    type: "number",
    unit: "회",
    placeholder: "교차 윗몸 일으키기 (회)를 입력해주세요.",
  },
  {
    typo: "왕복 오래 달리기 (회)",
    name: "왕복오래달리기",
    label: "왕복오래달리기",
    type: "number",
    unit: "회",
    placeholder: "왕복 오래 달리기 (회)을 입력해주세요.",
  },
  {
    typo: "10M 4회 왕복달리기 (초)",
    name: "왕복달리기_10M_4회",
    label: "왕복달리기_10M_4회",
    type: "number",
    unit: "초",
    placeholder: "10M 4회 왕복달리기 (초)를 입력해주세요.",
  },
  {
    typo: "제자리 멀리뛰기 (cm)",
    name: "제자리_멀리뛰기",
    label: "제자리_멀리뛰기",
    type: "number",
    unit: "cm",
    placeholder: "제자리 멀리뛰기 (cm)를 입력해주세요.",
  },
  {
    typo: "상대 악력 (%)",
    name: "상대악력",
    label: "상대악력",
    type: "number",
    unit: "%",
    placeholder: "상대 악력 (%)를 입력해주세요.",
  },
];

export const onBoardingBody: onBoardingProps[] = [
  {
    typo: "키 (cm)",
    name: "키",
    label: "키",
    type: "number",
    unit: "cm",
    placeholder: "키를 입력해주세요.",
  },
  {
    typo: "몸무게 (kg)",
    name: "몸무게",
    label: "몸무게",
    type: "number",
    unit: "kg",
    placeholder: "몸무게를 입력해주세요.",
  },
  {
    typo: "체지방률 (%)",
    name: "체지방률",
    label: "체지방률",
    type: "number",
    unit: "%",
    placeholder: "체지방률을 입력해주세요.",
  },
  {
    typo: "BMI (kg/㎡)",
    name: "BMI",
    label: "BMI",
    type: "number",
    unit: "kg/㎡",
    placeholder: "BMI를 입력해주세요.",
  },
];
