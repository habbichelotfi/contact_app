import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
  })
export class StorageHelper{

  constructor(private storage: Storage) {}

  async setData(key:any, value:any) {
    const res = await this.storage['set'](key, value);
    console.log(res);
  }

  async getData(key:any) {
    const keyVal = await this.storage['get'](key);
    console.log('Key is', keyVal);
  }

}

