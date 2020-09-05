import { Injectable } from '@angular/core';
import { CacheObject } from '../services/cache.interface';
import { BehaviorSubject } from 'rxjs';

interface cacheObject {

  key:string,
  data: Array<any>
}

@Injectable({
  providedIn: 'root'
})


export class CacheService {
    public _store =  new BehaviorSubject<cacheObject[]>(null);
    readonly DEFAULT_MAX_AGE: number = 300000;

  /**
   * Gets the value from cache if the key is provided.
   * If no value exists in cache, then check if the same call exists
   * in flight, if so return the subject. If not create a new
   * Subject inFlightObservable and return the source observable.
   */
  get(key:string): Array<any> {
    let _data = [];
    if (this._store.value) { this._store.value.find((cached) => {
       if (cached.key === key) { _data.push(cached.data) } 
      }) }
    console.log(`%c Getting data ${_data.length} from cache`, 'color:green')
    return _data;
  }

  /**
   * Sets the value with key in the cache
   * Notifies all observers of the new value
   */
  set(key:string ,data: Array<any>) {
    let cacheArr =[];
    let cacheObj: cacheObject = {key:'',data:[]};
    cacheObj.key = key;
    cacheObj.data = data;
    this._store.value ? cacheArr= [...this._store.value,cacheObj] : cacheArr.push(cacheObj)
    this._store.next(cacheArr);
    console.log('cached',this._store)
  }


  /**
   * Checks if the a key exists in cache and is not expired
   */
  hasKey(key:string) {
    const isDuplicate = this._store.value.find((cached) => { cached.key === key}).key ? true : false;
    return isDuplicate;
  }

 
}