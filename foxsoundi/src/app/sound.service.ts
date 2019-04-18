import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class SoundService {

  private _url:string = "data/data.json";
  constructor (private _http: Http) {}

  getSounds() {
  }
}
