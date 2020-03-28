import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Global} from './global';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public url: string;
  
  constructor(
    private http: HttpClient
  ) {
    this.url = Global.url;
  }
    
  autenticate(value: Object): Observable<Object> {
    return this.http.post(this.url + 'authenticate/', value );
  }

}
