import { Routes } from '@angular/router';
import { MaterialSidenavMattableComponent } from './components/material-sidenav-mattable/material-sidenav-mattable.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  { path: 'material', component: MaterialSidenavMattableComponent },
  { path: 'home', component: HomeComponent}
];
