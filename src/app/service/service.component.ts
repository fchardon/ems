import { Component, OnInit } from '@angular/core';
import { AppState } from '../app.service';
import { CategoryModel } from '../models/category';
import { ServiceModel } from '../models/web';

@Component({
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  navbarCollapsed = true;

  selection: string;
  public isSelected: boolean;

  public step1: boolean;
  public step2: boolean;
  public step3: boolean;
  public step4: boolean;
  public my_Class = 'provider';

  private service: ServiceModel = new ServiceModel("1","Service 1");

  constructor(private appState: AppState) {

  }

  ngOnInit() {
    this.selection =  'configuration';
    this.isSelected = false;
    this.my_Class = 'provider';
    this.step(true,false,false,false);
  }

  step(step1: boolean,step2: boolean,step3: boolean,step4: boolean) {
    this.step1 = step1;
    this.step2 = step2;
    this.step3 = step3;
    this.step4 = step4;
  }

  get serviceNum(): number {
    return this.appState.serviceNum;
  }

  select() {
    console.log("test"+this.my_Class+"-"+this.isSelected);
      this.isSelected = !this.isSelected;
      if(this.my_Class=="provider"){
        this.my_Class='style2';
      }else{
        this.my_Class='provider';
      }

  }

  toggleNavbar() {
    this.navbarCollapsed = !this.navbarCollapsed;
  }

  selecteConfiguration() {
    this.selection = 'configuration';
  }

  selecteSatus() {
    this.selection = 'status';
  }

  selecteOther() {
    this.selection = 'other';
  }

  createApplication() {
    this.step(true,true,false,false);
    this.selecteSatus();

  }

  validateStepStatus() {
    this.step(true,true,true,false);
    this.selecteOther();
  }

}
