import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { AboutComponent } from './about';
import { NoContentComponent } from './no-content';

import { ServiceComponent } from './service/service.component';
import { AddApplicationComponent } from './add-application/add-application.component';
import { MyApplicationComponent } from './my-application/my-application.component';

export const ROUTES: Routes = [
  { path: '',      component: HomeComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'my-app',  component: MyApplicationComponent },
  { path: 'add-app',  component: AddApplicationComponent },

  { path: 'about', component: AboutComponent },
  { path: 'detail', loadChildren: './+detail#DetailModule'},
  { path: 'barrel', loadChildren: './+barrel#BarrelModule'},

  { path: 'service/:serviceId', component: ServiceComponent},

  { path: '**',    component: NoContentComponent },
];
