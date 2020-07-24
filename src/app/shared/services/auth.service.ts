import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {shareReplay, tap} from 'rxjs/operators';
import {WebRequestService} from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLogged = false;
  constructor(private websrv: WebRequestService, private router : Router, private http: HttpClient) { }

  login(email: string, pwd: string): Observable<any>{
    return this.websrv.login(email, pwd).pipe(
      shareReplay(),
      tap((res: HttpResponse<any>)=>{
        // the auth token will be in the header of the response
        this.setSession(res.body._id, res.headers.get('x-access-token'), res.headers.get('x-refresh-token'));
        console.log('logged in');
        this.isLogged = true;
        //this.isUserLogged = res.status === 200 ? true : false;
      })
    );
  }


  signup(email: string, pwd: string): Observable<any>{
    return this.websrv.signup(email, pwd).pipe(
      shareReplay(),
      tap((res:HttpResponse<any>)=>{
        // the auth token will be in the header of the response
        this.setSession(res.body._id, res.headers.get('x-access-token'), res.headers.get('x-refresh-token'));
        console.log('SIGNED UP');
      })
    );
  }




  logout(): void{
    this.removeSession();
    this.isLogged = false;
    //this.router.navigateByUrl('/login');
  }

  getAccessToken(): any{
    return localStorage.getItem('x-access-token');
  }

  setAccessToken(accessToken: string): void{
    localStorage.setItem('x-access-token', accessToken);
  }

  getRefreshToken(): any{
    return localStorage.getItem('x-refresh-token');
  }

  setRefreshToken(refreshToken: string): void{
    localStorage.setItem('x-refresh-token', refreshToken);
  }

  getUserId(): any{
    return localStorage.getItem('user-id');
  }

  private setSession(userId: string, accessToken: string, refreshToken: string): void{
    localStorage.setItem('user-id', userId);
    localStorage.setItem('x-access-token', accessToken);
    localStorage.setItem('x-refresh-token', refreshToken);
  }

  private removeSession(): void{
    localStorage.removeItem('user-id');
    localStorage.removeItem('x-access-token');
    localStorage.removeItem('x-refresh-token');

  }

  getNewAccessToken(): any{
    console.log('gonna try')

    return this.http.get(`${this.websrv.ROOT_URL}/users/me/access-token`, {
      headers : {
        'x-refresh-token' : this.getRefreshToken() ? this.getRefreshToken() : '',
        '_id' : this.getUserId() ? this.getUserId() : ''
      },
      observe : 'response'
    }).pipe(
      tap((res: HttpResponse<any>) => {
        this.setAccessToken(res.headers.get('x-access-token'))
      })
    );
  }

}
