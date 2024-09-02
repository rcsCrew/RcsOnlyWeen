import { Routes } from '@angular/router';
import { HubComponent } from './pages/hub/hub.component';

export const routes: Routes = [
  {path: "", redirectTo: "hub", pathMatch: "full"},
  {path: "hub", component: HubComponent}
];
