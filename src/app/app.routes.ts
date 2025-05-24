import { Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {ClientsComponent} from './clients/clients.component';
import {AdminTemplateComponent} from './admin-template/admin-template.component';
import {authenticationGuard} from './guards/authentication.guard';
import {NewclientComponent} from './newclient/newclient.component';
import {authorizationGuard} from './guards/authorization.guard';
import {NotAuthorizedComponent} from './not-authorized/not-authorized.component';

export const routes: Routes = [
  { path:"login" , component : LoginComponent},
  { path: "",redirectTo : "login", pathMatch : "full"},
  { path: "admin", component : AdminTemplateComponent,canActivate:[authenticationGuard],
    children:[
      { path : "clients",component : ClientsComponent },
      { path : "addClient", component : NewclientComponent,canActivate:[authorizationGuard],data : {role : "ADMIN"}},
      { path : "notAuthorized",component : NotAuthorizedComponent },
    ]}

];
