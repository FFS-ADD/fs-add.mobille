import {Injectable} from "@angular/core";
import {BugResponseInterface} from './BugInterface';

@Injectable()
export class BugState {
  response: BugResponseInterface;
  success:boolean;
}
