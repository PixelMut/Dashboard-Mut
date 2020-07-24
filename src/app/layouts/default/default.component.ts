import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../shared/services/auth.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {
  sideBarOpen = false;

  constructor() { }

  ngOnInit(): void {

  }

  sideBarToggler(): void{
    this.sideBarOpen = !this.sideBarOpen;
  }
}
