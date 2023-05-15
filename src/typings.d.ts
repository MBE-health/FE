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
