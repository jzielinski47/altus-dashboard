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

export interface iUser {
  id?: number;
  username: string;
  email: string;
  password: string;
  role?: string;
  avatarUrl?: string;
  creationDate?: number;
  lastLogin?: number;
  gender?: string;
  disabled?: boolean;
}

export interface AuthContextType {
  user: iUser | null;
  setUser: React.Dispatch<React.SetStateAction<iUser | null>>;
  logout: () => void;
  isCookiesSet: boolean;
  setIsCookiesSet: React.Dispatch<React.SetStateAction<boolean>>;
  loading: boolean;
}
