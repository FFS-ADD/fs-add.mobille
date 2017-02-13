export interface LoginResponseInterface {
  access_token: string;
  refresh_token: string;
  token_type: string;
  expires_in: number;
  scope: string;
}

export interface LoginRequestInterface {
    email: string;
    password: string;
}
