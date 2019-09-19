import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SecuritiesListComponent } from './securities/securities-list.component';
import { SecurityComponent } from './securities/security.component';
import { SecurityService } from './securities/shared/security.service';
import { appRoutes } from './routes';
import { RouterModule } from '@angular/router';
import { SecurityDetailsComponent } from './securities/security-details.component';
import { NavBarComponent } from './nav/navbar.component';
import { Error404Component } from './errors/404.component';
import { SecurityRouteActivator } from './securities/security-route-activator';
import { AuthService } from './user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateSecurityComponent } from './securities/create-security.component';
import { PortfolioListComponent } from './portfolios/portfolio-list.component';
import { PortfolioThumbnailComponent } from './portfolios/portfolio-thumbnail.component';
import { PortfolioService } from './portfolios/shared/portfolio.service';
import { PortfolioRouteActivator } from './portfolios/portfolio-route-activator';
import { PortfolioDetailsComponent } from './portfolios/portfolio-details.component';
import { CreatePortfolioSecurityComponent } from './portfolios/create-portfolio-security.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { PortfolioSecuritiesListComponent } from './portfolios/portfolio-security-list.component';

@NgModule({
  declarations: [
    AppComponent,SecuritiesListComponent,SecurityComponent,SecurityDetailsComponent,NavBarComponent,Error404Component
    ,CreateSecurityComponent, 
    PortfolioListComponent, PortfolioThumbnailComponent, PortfolioDetailsComponent,
    CreatePortfolioSecurityComponent, PortfolioSecuritiesListComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [SecurityService,SecurityRouteActivator,
            AuthService,
            PortfolioService,PortfolioRouteActivator],
  bootstrap: [AppComponent]
})
export class AppModule { }
