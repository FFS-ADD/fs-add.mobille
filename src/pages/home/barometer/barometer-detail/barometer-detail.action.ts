import {Injectable} from "@angular/core";

@Injectable()
export class BarometerDetailAction {

  constructor() {  }

  public Init() {
    let detailList = [
      {
        detailStatusIcon: 'happy',
        detailData: '2017/02/14',
        detailText: 'all is well',
        detailStatusColor: 'green'
      },
      {
        detailStatusIcon: 'sad',
        detailData: '2017/02/13',
        detailText: 'all is not well',
        detailStatusColor: 'red'
      }
    ];

    return detailList;
  }
}
