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
  userEmail = '';

  constructor(private authSrv: AuthService) { }

  ngOnInit(): void {
    this.authSrv.getNewAccessToken().subscribe((res) => {
      if(res && res.status === 200){
        console.log(res)
        this.isUserLogged = true;
        this.userEmail = res.body.email;
        this.authSrv.isLogged = true;
      }
    });
  }

  onClickMenu(): void{
    this.toggleSideBar.emit();
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }


  onLog(result): void{
    if(result.status === 200){
      this.isUserLogged = true;
      console.log(result.body)
      this.userEmail = result.body.email;
    }else{
      this.isUserLogged = false;
    }

  }

  onClickLogOut(): void{
    this.authSrv.logout();
    this.isUserLogged = false;
  }



}
