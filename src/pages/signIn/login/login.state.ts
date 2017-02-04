import {Injectable} from "@angular/core";
import {LoginResponseInterface} from './login.interface';

@Injectable()
export class LoginState {
  response:LoginResponseInterface;
  success:boolean;
}
