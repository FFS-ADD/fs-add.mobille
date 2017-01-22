import {Injectable} from "@angular/core";
import {LoginResponseInterface} from './LoginInterface';

@Injectable()
export class LoginState {
  response:LoginResponseInterface;
  success:boolean;
}
