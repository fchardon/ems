import { Component, OnInit } from '@angular/core';
import { AppState } from '../app.service';

@Component({
  templateUrl: './add-application.component.html',
  styleUrls: ['./add-application.component.css']
})
export class AddApplicationComponent implements OnInit {

  constructor(private appState: AppState) {}

  ngOnInit() {
    this.appState.serviceNum = 45;
    console.log("Add Application"+this.appState.serviceNum);
    this.appState.menuObs.next("addApp");
  }


}
