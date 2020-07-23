import {Component, Inject, EventEmitter, OnInit, Output} from '@angular/core';
import {HttpResponse} from '@angular/common/http';
import {AuthService} from '../../shared/services/auth.service';

import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Output() isLogged: EventEmitter<any> = new EventEmitter();
  constructor(public dialog: MatDialog) {
  }


  ngOnInit(): void {}

  onClickLogin(): void{
    this.openDialog();
  }


  openDialog(): void {
    const dialogRef = this.dialog.open(LoginDialogComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result === 'loggedIn'){
        this.isLogged.emit(true);
      }else{
        this.isLogged.emit(false);
      }

    });
  }


}

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-popup.html',
})
export class LoginDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<LoginDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private authSrv: AuthService) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onLoginButtonClicked(email: string, pwd: string): void{
    this.authSrv.login(email, pwd).subscribe((res: HttpResponse<any>) => {
      if (res.status === 200){
        // logged in successfully
        this.dialogRef.close('loggedIn');
        //this.router.navigate(['/lists']);
      }
    });
  }

}
