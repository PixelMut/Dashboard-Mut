import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebRequestService {

  readonly ROOT_URL;

  constructor(private http: HttpClient) {
    this.ROOT_URL = 'http://localhost:3000';
  }

  get(uri: string): any{
    return this.http.get(`${this.ROOT_URL}/${uri}`);
  }

  post(uri: string, payload: object): any{
    return this.http.post(`${this.ROOT_URL}/${uri}`, payload);
  }

  patch(uri: string, payload: object): any{
    return this.http.patch(`${this.ROOT_URL}/${uri}`, payload);
  }

  delete(uri: string): any{
    return this.http.delete(`${this.ROOT_URL}/${uri}`);
  }

  login(email: string, pwd: string): any{
    return this.http.post(`${this.ROOT_URL}/users/login`, {
      email : email,
      password : pwd
    },{observe : 'response'});
  }

  signup(email: string, pwd: string): any{
    return this.http.post(`${this.ROOT_URL}/users`, {
      email : email,
      password : pwd
    }, {observe : 'response'});
  }
}
