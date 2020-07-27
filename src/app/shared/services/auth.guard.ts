import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authSrv: AuthService) { }

  canActivate(
    next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | boolean | UrlTree {
    console.log('can access ?');


    // return this.authSrv.getNewAccessToken().subscribe((res) => {
    //   if(res && res.status === 200){
    //     console.log(res)
    //     return true;
    //   }else{
    //     console.log(res)
    //     console.log('its a no')
    //     return false;
    //   }
    // });

    // return this.authSrv.isLogged;

    return true
  }

}
