import { Injectable, Inject } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { HomeModel } from '../models/home.model';
import { APP_CONFIG, IAppConfig } from '../config/app.config';


@Injectable()
export class ResourceService {

    headers: Headers = new Headers();
    constructor(private http: Http, 
                @Inject(APP_CONFIG) private config: IAppConfig) {
        this.headers.append('Content-type', 'applicaiton/json');
    }

    interceptor(): RequestOptions {
        const opts: RequestOptions = new RequestOptions();
        opts.headers = this.headers;
        return opts;
    }

    getHomeDataList(): Observable<HomeModel[]> {
        return this.http.get('/xxxx.json', 
            this.interceptor()).map((res: Response) => <HomeModel[]> res.json().resources);
    }
}