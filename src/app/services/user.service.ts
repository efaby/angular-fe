import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Global} from './global';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public url: string;
 
  constructor(
    private http: HttpClient
  ) {
    this.url = Global.url;
  }
    
  getUsers(): Observable<any> {
    return this.http.get(this.url + 'users/' );
  }

  getUser(id: string): Observable<any> {
    return this.http.get(`${this.url}user/${id}`);
  }

  createUser(user: Object): Observable<Object> {
    return this.http.post(`${this.url}user`, user);
  }

  updateUser(id: string, value: any): Observable<Object> {
    return this.http.put(`${this.url}user/${id}`, value);
  }

  deleteUser(id: string): Observable<any> {
    return this.http.delete(`${this.url}user/${id}`);
  }

}
