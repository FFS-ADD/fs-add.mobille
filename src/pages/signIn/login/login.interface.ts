export interface LoginResponseInterface {
  access_token: string;
  refresh_token: string;
  token_type: string;
  expires_in: number;
  scope: string;
  lastLoginTime: string;
}

export interface LoginRequestInterface {
  username: string;
  password: string;
  grant_type: string;
}
