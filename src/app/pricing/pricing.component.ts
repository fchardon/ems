import { Component, OnInit } from '@angular/core';
import { AppState } from '../app.service';
import { CategoryModel } from '../models/category';

@Component({
  selector: 'ems-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {

  constructor(private appState: AppState) {}

  ngOnInit() {
  }

}
