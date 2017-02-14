import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject} from 'rxjs';
import { ResourceService } from '../../providers/resource.service'
import { HomeModel } from '../../models/home.model';
import { HttpService } from "../../core/HttpService";

let optionsInitialState: any[] = []

@Injectable()
export class HomeService {

    dataList: Subject<any[]> = new BehaviorSubject<any[]>(optionsInitialState);

    constructor(private resourceService: ResourceService, private httpService: HttpService) {
     
    }

    getImageList(): void {
        this.resourceService.getHomeDataList().subscribe((data: HomeModel[]) => {
            this.dataList.next(data);
        });
    }

    public getInitDataSetting() {
       let observable = this.httpService.getFakeData('/assets/data/signIn/datasetting-init.json', {});
       return observable;
    }

}