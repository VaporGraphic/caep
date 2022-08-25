import { NavigatorService } from './../../services/navigator/navigator.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-navbar-widget',
  templateUrl: './login-navbar-widget.component.html',
  styleUrls: ['./login-navbar-widget.component.scss']
})
export class LoginNavbarWidgetComponent implements OnInit {

  @Input() message: string ="";
  @Input() textButton: string ="";
  @Input() route: string ="";

  constructor(public navigatorService: NavigatorService) { }

  ngOnInit(): void {
  }

  goHome(){
    this.navigatorService.navigateTo('/home');
  }

  navigate(){
    this.navigatorService.navigateTo(this.route);
  }



}
