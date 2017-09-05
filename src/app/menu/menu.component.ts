import { Component, OnInit } from '@angular/core';
import { AppState } from '../app.service';
import { CategoryModel } from '../models/category';

@Component({
  selector: 'ems-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  navbarCollapsed = true;



  constructor(private appState: AppState) {}

  ngOnInit() {
  }


  toggleNavbar() {
    this.navbarCollapsed = !this.navbarCollapsed;
  }

}
