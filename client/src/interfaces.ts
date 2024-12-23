export interface iError {
  message?: string;
}

export interface iSignupData {
  username: string;
  email: string;
  password: string;
}

export interface iLoginData {
  email: string;
  password: string;
}

export interface ApiResponse<T> {
  data?: T;
  error?: string;
}
