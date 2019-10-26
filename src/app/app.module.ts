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
import { PortfolioDetailsComponent } from './portfolios/portfolio-details.component';
import { CreatePortfolioSecurityComponent } from './portfolios/create-portfolio-security.component';

import { PortfolioSecuritiesListComponent } from './portfolios/portfolio-security-list.component';
import { SimpleModalComponent } from './common/simpleModal.component';
import { ModalTriggerDirective } from './common/modalTrigger.directive';
import { JQ_TOKEN } from './common/jQuery.service';
import { HttpClientModule } from '@angular/common/http';
import { CreatePortfolioComponent } from './portfolios/create-portfolio.component';
import { PortfolioResolver } from './portfolios/shared/portfolio-resolver.service';
import { PortfolioSecurityDetailsComponent } from './portfolios/security-details.component';
import { PortfolioSecurityResolver } from './portfolios/shared/portfolio-security-resolver.service';

let jQuery = window['$'];

@NgModule({
  declarations: [
    AppComponent,SecuritiesListComponent,SecurityComponent,SecurityDetailsComponent,NavBarComponent,Error404Component
    ,CreateSecurityComponent,
    PortfolioListComponent, PortfolioThumbnailComponent, PortfolioDetailsComponent,
    CreatePortfolioSecurityComponent, PortfolioSecuritiesListComponent,
    PortfolioSecurityDetailsComponent,
    SimpleModalComponent, ModalTriggerDirective,
    CreatePortfolioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [SecurityService,SecurityRouteActivator,
            AuthService,
            PortfolioService,
            { provide: JQ_TOKEN, useValue:jQuery},
            PortfolioResolver,
            PortfolioSecurityResolver
          ],
  bootstrap: [AppComponent]
})
export class AppModule { }
