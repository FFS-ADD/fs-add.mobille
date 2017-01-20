import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject} from 'rxjs';
import { ResourceService } from '../../providers/resource.service'
import { HomeModel } from '../../models/home.model';

let optionsInitialState: any[] = []

@Injectable()
export class HomeService {

    dataList: Subject<any[]> = new BehaviorSubject<any[]>(optionsInitialState);

    constructor(private resourceService: ResourceService) {

    }

    getImageList(): void {
        this.resourceService.getHomeDataList().subscribe((data: HomeModel[]) => {
            this.dataList.next(data);
        });
    }
}