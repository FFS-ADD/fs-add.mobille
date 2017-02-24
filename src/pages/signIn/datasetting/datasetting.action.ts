import { Injectable , Inject} from "@angular/core";
import { Dispatcher } from "../../../core/Dispatcher";
import { HttpService } from "../../../core/HttpService";
import { DataSettingActionType } from './datasetting.action.type';
import { APP_CONFIG, IAppConfig } from '../../../config/app.config';

@Injectable()
export class DataSettingAction {
  constructor(private dispatcher: Dispatcher, private httpService: HttpService,
   @Inject(APP_CONFIG) private config: IAppConfig){

  }

  public init(email) {
    console.debug("init");
   // let observable = this.httpService.getFakeData('/assets/data/signIn/datasetting-init.json', form);
    let observable = this.httpService.get(this.config.webapiGetDataSetting, {"email": email});
    observable.subscribe( (data) => this.dispatcher.dispatch(DataSettingActionType.INIT, data));
    return observable;
  }

  public save(form) {
    console.debug("toggle");
    let observable = this.httpService.post(this.config.webapiSaveDataSetting, form);
    observable.subscribe(
      (data) => 
        this.dispatcher.dispatch(DataSettingActionType.SAVE, data)
    );
    return observable;
  }
}
