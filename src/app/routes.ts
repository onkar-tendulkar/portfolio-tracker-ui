import { Routes } from '@angular/router';
import { SecuritiesListComponent } from './securities/securities-list.component';
import { SecurityDetailsComponent } from './securities/security-details.component';
import { Error404Component } from './errors/404.component';
import { SecurityRouteActivator } from './securities/security-route-activator';
import { CreateSecurityComponent } from './securities/create-security.component';
import { PortfolioListComponent } from './portfolios/portfolio-list.component';
import { PortfolioDetailsComponent } from './portfolios/portfolio-details.component';
import { PortfolioRouteActivator } from './portfolios/portfolio-route-activator';
import { CreatePortfolioSecurityComponent } from './portfolios/create-portfolio-security.component';

export const appRoutes:Routes = [
    {   path : "securities", component : SecuritiesListComponent },
    {   path : "securities/new", component : CreateSecurityComponent },
    {   path : "securities/:id", component : SecurityDetailsComponent, canActivate : [SecurityRouteActivator]},
    
    {   path : "portfolios", component : PortfolioListComponent },
    {   path : "portfolios/:id", component : PortfolioDetailsComponent, canActivate : [PortfolioRouteActivator]},
    {   path : "portfolio/securities/new", component : CreatePortfolioSecurityComponent },
    
    {   path : "", redirectTo: "securities", pathMatch: "full" },
    {   path : "404", component : Error404Component},
    {   path : "user", loadChildren : "./user/user.module#UserModule"}

]