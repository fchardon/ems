import { Component, OnInit } from '@angular/core';
import { AppState } from '../app.service';
import { CategoryModel } from '../models/category';

@Component({
  selector: 'ems-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.css']
})
export class ComponentComponent implements OnInit {

  navbarCollapsed = true;

  constructor(private appState: AppState) {}

  ngOnInit() {
    this.appState.serviceNum = 0;
  }


  toggleNavbar() {
    this.navbarCollapsed = !this.navbarCollapsed;
  }

  service(serviceNum: number) {
    this.appState.serviceNum = serviceNum;
  }

  get serviceNum(): number {
    return this.appState.serviceNum;
  }

}
