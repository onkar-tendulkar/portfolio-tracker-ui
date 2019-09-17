import { Routes } from '@angular/router';
import { SecuritiesListComponent } from './securities/securities-list.component';
import { SecurityDetailsComponent } from './securities/security-details.component';
import { Error404Component } from './errors/404.component';
import { SecurityRouteActivator } from './securities/security-route-activator';
import { CreateSecurityComponent } from './securities/create-security.component';

export const appRoutes:Routes = [
    {   path : "securities", component : SecuritiesListComponent },
    {   path : "securities/new", component : CreateSecurityComponent },
    {   path : "securities/:id", component : SecurityDetailsComponent, canActivate : [SecurityRouteActivator]},
    {   path : "", redirectTo: "securities", pathMatch: "full" },
    {   path : "404", component : Error404Component},
    {   path : "user", loadChildren : "./user/user.module#UserModule"}

]