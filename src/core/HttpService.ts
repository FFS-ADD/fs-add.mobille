import { Injectable } from "@angular/core";
import { Http, Response, URLSearchParams, Headers } from "@angular/http";
import { BusinessFailureException } from "./BusinessFailureException";
import "rxjs/add/operator/map";
import { AppConfig } from "../config/app.config";
import {Observable} from "rxjs/Observable";
import {Observer} from "rxjs/Observer";

@Injectable()
export class HttpService {
  constructor(private http:Http) {
  }

  private getRequest(url:string, data?:Object) {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");

    let parameters = new URLSearchParams();
    Object.keys(data).map((k) => {
      if (data.hasOwnProperty(k)) {
        parameters.set(k, data[k]);
      }
    });

    let observable = Observable.create(observer => {
      this.http.get(url, {
        search: parameters,
        headers: headers
      }).map((res:Response) => {
        console.debug("http request completed: " + url);
        return res.json();
      }).subscribe(
        (data) => {
          observer.next(data);
          observer.complete();
        },
        (error) => {
          console.debug("error occurred.");
          throw new BusinessFailureException(error);
        });
    });

    return observable.share();
  }

  public getFakeData(url:string, data ?:Object) {
    return this.getRequest(url, data);
  }

  public get(url:string, data ?:Object) {
    return this.getRequest(AppConfig.apiURL + url, data);
  }

  public post(url:string, data ?:any) {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");

    let observable = Observable.create(observer => {
      this.http.post(
        AppConfig.apiURL + url,
        JSON.stringify(data),
        {headers: headers}
      ).map((res:Response) => {
        console.debug("http request completed: " + url);
        return res.json();
      }).subscribe(
        (data) => {
          observer.next(data);
          observer.complete();
        },
        (error) => {
          console.debug("error occurred.");
          throw new BusinessFailureException(error);
        });
    });

    return observable.share();
  }
}
