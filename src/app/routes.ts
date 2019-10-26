import { Routes } from '@angular/router';
import { SecuritiesListComponent } from './securities/securities-list.component';
import { SecurityDetailsComponent } from './securities/security-details.component';
import { Error404Component } from './errors/404.component';
import { SecurityRouteActivator } from './securities/security-route-activator';
import { CreateSecurityComponent } from './securities/create-security.component';
import { PortfolioListComponent } from './portfolios/portfolio-list.component';
import { PortfolioDetailsComponent } from './portfolios/portfolio-details.component';
import { PortfolioResolver } from './portfolios/shared/portfolio-resolver.service';
import { PortfolioSecurityDetailsComponent } from './portfolios/security-details.component';
import { PortfolioSecurityResolver } from './portfolios/shared/portfolio-security-resolver.service';

export const appRoutes:Routes = [
    {   path : "securities", component : SecuritiesListComponent },
    {   path : "securities/new", component : CreateSecurityComponent },
    {   path : "securities/:id", component : SecurityDetailsComponent, canActivate : [SecurityRouteActivator]},

    {   path : "portfolios", component : PortfolioListComponent },
    {   path : "portfolios/:id", component : PortfolioDetailsComponent ,
            resolve : {portfolio: PortfolioResolver,
                    securities: PortfolioSecurityResolver}},
    {   path : "securityDetails/:portfolioId/:symbol", component : PortfolioSecurityDetailsComponent },

    {   path : "", redirectTo: "securities", pathMatch: "full" },
    {   path : "404", component : Error404Component},
    {   path : "user", loadChildren : "./user/user.module#UserModule"}

]
