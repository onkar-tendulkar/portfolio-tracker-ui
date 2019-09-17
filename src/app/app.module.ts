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

@NgModule({
  declarations: [
    AppComponent,SecuritiesListComponent,SecurityComponent,SecurityDetailsComponent,NavBarComponent,Error404Component
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [SecurityService,SecurityRouteActivator,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
