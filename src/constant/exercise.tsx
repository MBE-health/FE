/*
// 운동 타입 - type
'Strength''근력' 
'Plyometrics'  '플라이오메트릭'
'Cardio'  '유산소' 
'Stretching' '스트레칭'
'Powerlifting'  '파워리프팅'
'Strongman'  '스트롱맨' 
'Olympic Weightlifting' '올림픽 역도'

// 운동 부위 - body
'Abdominals' '복부' 
'Adductors' '내전근' 
'Abductors'  '외전근' 
'Biceps'  '이두근'
'Calves'  '종아리' 
'Chest' '가슴' 

'Forearms'  '팔뚝' 
'Glutes' '둔근'
'Hamstrings' '햄스트링'  
'Lats' '허리' 
'Lower Back' '허리 아래' 

'Middle Back'  '허리 중간'
'Traps'  '트랩'
'Neck' '목' 
'Quadriceps' '대퇴사두근' 
'Shoulders' '어깨' 
'Triceps' '삼두근'



// 운동 도구 - Equipment
'Bands' '밴드'
'Barbell'  '바벨'
'Kettlebells' '케틀벨'
'Dumbbell'  '덤벨'

'Cable' '케이블' 
'Machine'  '머신'
'None'  '없음'
'Medicine Ball'  '메디신볼'
'Exercise Ball' '운동공' 

'Foam Roll' '폼롤'
'E-Z Curl Bar' 'E-Z 컬바'



// 운동 수준 - Level
'Intermediate' '중급'
'Beginner'  '초급'
'Expert' '전문가'

*/

export const type = [
  { value: "Strength", name: "근력", key: "type" },
  { value: "Plyometrics", name: "플라이오메트릭", key: "type" },
  { value: "Cardio", name: "유산소", key: "type" },
  { value: "Stretching", name: "스트레칭", key: "type" },
  { value: "Powerlifting", name: "파워리프팅", key: "type" },
  { value: "Strongman", name: "스트롱맨", key: "type" },
  { value: "Olympic Weightlifting", name: "올림픽 역도", key: "type" },
];

export const body = [
  { value: "Abdominals", name: "복부" },
  { value: "Adductors", name: "내전근" },
  { value: "Abductors", name: "외전근" },
  { value: "Biceps", name: "이두근" },
  { value: "Calves", name: "종아리" },
  { value: "Chest", name: "가슴" },

  { value: "Forearms", name: "팔뚝" },
  { value: "Glutes", name: "둔근" },
  { value: "Hamstrings", name: "햄스트링" },
  { value: "Lats", name: "허리" },
  { value: "Lower Back", name: "허리 아래" },

  { value: "Middle Back", name: "허리 중간" },
  { value: "Traps", name: "트랩" },
  { value: "Quadriceps", name: "대퇴사두근" },
  { value: "Shoulders", name: "어깨" },
  { value: "Triceps", name: "삼두근" },
];

export const equipment = [
  { value: "Bands", name: "밴드", key: "equipment" },
  { value: "Barbell", name: "바벨", key: "equipment" },
  { value: "Kettlebells", name: "케틀벨", key: "equipment" },
  { value: "Dumbbell", name: "덤벨", key: "equipment" },
  { value: "Cable", name: "케이블", key: "equipment" },
  { value: "Machine", name: "머신", key: "equipment" },
  { value: "None", name: "없음", key: "equipment" },
  { value: "Medicine Ball", name: "메디신볼", key: "equipment" },
  { value: "Exercise Ball", name: "운동공", key: "equipment" },
  { value: "Foam Roll", name: "폼롤", key: "equipment" },
  { value: "E-Z Curl Bar", name: "E-Z 컬바", key: "equipment" },
];

export const level = [
  { value: "Intermediate", name: "중급", key: "level" },
  { value: "Beginner", name: "초급", key: "level" },
  { value: "Expert", name: "전문가", key: "level" },
];

export const exercise = {
  type: type,
  level: level,
  body: body,
  equipment: equipment,
};
