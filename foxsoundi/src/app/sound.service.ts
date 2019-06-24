import { Injectable } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class SoundService {

  private _url = "data/data.json";
  constructor(private _http: HttpClientModule) {}

  getSounds() {
  }
}
