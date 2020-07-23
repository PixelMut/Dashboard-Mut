import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isUserLogged = false;
  @Output() toggleSideBar: EventEmitter<any> = new EventEmitter<any>();

  constructor(private authSrv: AuthService) { }

  ngOnInit(): void {
  }

  onClickMenu(): void{
    this.toggleSideBar.emit();
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }


  onLog(isLoggedIn): void{
    console.log(this.isUserLogged)
    this.isUserLogged = isLoggedIn;
  }

  onClickLogOut(): void{
    this.authSrv.logout();
    this.isUserLogged = false;
  }



}
