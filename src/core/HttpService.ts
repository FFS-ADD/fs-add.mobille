import { Injectable } from "@angular/core";
import { Http, Response, URLSearchParams, Headers } from "@angular/http";
import { BusinessFailureException } from "./BusinessFailureException";
import "rxjs/add/operator/map";
import { AppConfig } from "../config/app.config";

@Injectable()
export class HttpService {
  constructor(private http: Http) {
  }

  private getRequest(url: string, data?: Object) {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");

    let parameters = new URLSearchParams();
    Object.keys(data).map((k) => {
      if (data.hasOwnProperty(k)) {
        parameters.set(k, data[k]);
      }
    });

    let observable = this.http.get(url, {
      search: parameters,
      headers: headers
    }).map((res: Response) => res.json());

    observable.subscribe(
      null,
      (error) => {
        console.log(error);
        throw new BusinessFailureException(error);
      });
    return observable;
  }

  public getFakeData(url: string, data?: Object) {
    return this.getRequest(url, data);
  }

  public get(url: string, data?: Object) {
    return this.getRequest(AppConfig.apiURL + url, data);
  }

  public post(url: string, data?: any) {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    let observable = this.http.post(
      AppConfig.apiURL + url,
      JSON.stringify(data),
      { headers: headers }
    ).map((res: Response) => res.json());

    observable.subscribe(
      null,
      (error) => {
        console.log(error);
        throw new BusinessFailureException(error);
      });
    return observable;
  }
}
