import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  formPage:number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  nextFormPage(){
    this.formPage+=1;
  }

  returnFormPage(){
    this.formPage-=1;
  }


}
