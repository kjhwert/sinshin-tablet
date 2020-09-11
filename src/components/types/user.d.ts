export interface ILogin {
  user_id: string;
  user_pw: string;
}

export interface IUser {
  id: number;
  dept_name: string;
  user_id: string;
  name: string;
  tel: string;
  email: string;
  duty: string;
  dept_id: number;
  position: string;
  token: string;
  auth: {
    product_history?: Array<number>;
    production_management?: Array<number>;
    quality_management?: Array<number>;
    monitoring?: Array<number>;
    automotive_management?: Array<number>;
    system_management?: Array<number>;
  };
}
