import { Component, OnInit } from '@angular/core';
import { AppState } from '../app.service';

@Component({
  templateUrl: './my-application.component.html',
  styleUrls: ['./my-application.component.css']
})
export class MyApplicationComponent implements OnInit {

  navbarCollapsed = true;

  constructor(private appState: AppState) {}

  ngOnInit() {
    this.appState.menuObs.next("myApp");
  }


}
