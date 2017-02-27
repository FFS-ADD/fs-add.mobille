import {Injectable} from "@angular/core";
import {Http, Response, URLSearchParams, Headers} from "@angular/http";
import {ServerException} from "./ServerException";
import "rxjs/add/operator/map";
import {AppConfig} from "../config/app.config";
import {Observable} from "rxjs/Observable";
import {UserService} from "./UserService";

@Injectable()
export class HttpService {
  constructor(private http: Http, private user: UserService) {
  }

  private getRequest(url: string, data?: Object) {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", "Basic " + AppConfig.authKey);

    let parameters = new URLSearchParams();
    let accessToken = this.user.getAccessToken();
    if (accessToken) parameters.set("access_token", accessToken);
    Object.keys(data).map((k) => {
      if (data.hasOwnProperty(k)) {
        parameters.set(k, data[k]);
      }
    });

    let observable = Observable.create(observer => {
      this.http.get(url, {
        search: parameters,
        headers: headers
      }).map((res: Response) => {
        console.debug("http request completed: " + url);
        return res.json();
      }).subscribe(
        (data) => {
          observer.next(data);
          observer.complete();
        },
        (error) => {
          console.debug("error occurred.");
          throw new ServerException(error);
        });
    });

    return observable.share();
  }

  public getFakeData(url: string, data ?: Object) {
    return this.getRequest(url, data);
  }

  public get(url: string, data ?: Object) {
    return this.getRequest(AppConfig.apiURL + url, data);
  }

  public post(url: string, data ?: any) {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", "Basic " + AppConfig.authKey);

    let parameters = new URLSearchParams();
    let accessToken = this.user.getAccessToken();
    if (accessToken) parameters.set("access_token", accessToken);

    let observable = Observable.create(observer => {
      this.http.post(
        AppConfig.apiURL + url,
        JSON.stringify(data),
        {
          headers: headers,
          search: parameters
        }
      ).map((res: Response) => {
        console.debug("http request completed: " + url);
        return res.json();
      }).subscribe(
        (data) => {
          observer.next(data);
          observer.complete();
        },
        (error) => {
          console.debug("error occurred.");
          throw new ServerException(error);
        });
    });

    return observable.share();
  }
}
