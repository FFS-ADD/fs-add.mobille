import { Injectable } from "@angular/core";

@Injectable()
export class StorageService {
  private storage: any;

  constructor() {
    // this.storage = localStorage;
    this.storage = sessionStorage;
  }

  public get(key: string): any {
    let item = this.storage.getItem(key);

    if (item) {
      return JSON.parse(this.storage.getItem(key));
    }

    return null;
  }

  public store(key: string, value: any) {
    this.storage.setItem(key, JSON.stringify(value));
  }
}
