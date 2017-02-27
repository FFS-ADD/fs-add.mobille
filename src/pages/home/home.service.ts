import { Injectable , Inject} from '@angular/core';
import { Subject, BehaviorSubject} from 'rxjs';
import { ResourceService } from '../../providers/resource.service'
import { HomeModel } from '../../models/home.model';
import { HttpService } from "../../core/HttpService";
import { APP_CONFIG, IAppConfig } from '../../config/app.config';

let optionsInitialState: any[] = []

@Injectable()
export class HomeService {

    dataList: Subject<any[]> = new BehaviorSubject<any[]>(optionsInitialState);

    constructor(private resourceService: ResourceService, private httpService: HttpService, @Inject(APP_CONFIG) private config: IAppConfig) {

    }

    getImageList(): void {
        this.resourceService.getHomeDataList().subscribe((data: HomeModel[]) => {
            this.dataList.next(data);
        });
    }

    public getInitDataSetting(email:string) {
       let observable = this.httpService.get(this.config.webapiGetDataSetting, {"email": email});
       return observable;
    }

}
