export interface LoginResponseInterface {
  access_token: string;
  refresh_token: string;
  token_type: string;
  expires_in: number;
  scope: string;
  lastLoginTime: string;
  user: UserInterface;
}

export interface UserInterface {
  email: string;
  role: string;
  avatar: string;
  firstName: string;
  lastName: string;
  project: string;
  status: string;
}

export interface LoginRequestInterface {
  username: string;
  password: string;
  grant_type: string;
}
