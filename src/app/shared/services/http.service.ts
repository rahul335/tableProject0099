import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IRoot } from '../model/card';

@Injectable({
  providedIn: 'root'
})
export class HttpService implements OnInit{

  apiUrl : string = `${environment.apiUrl}`;


  constructor(private _http : HttpClient) { }
  ngOnInit(): void {
  }

  getData():Observable<IRoot>{
    return this._http.get<IRoot>(this.apiUrl);
  }
}
