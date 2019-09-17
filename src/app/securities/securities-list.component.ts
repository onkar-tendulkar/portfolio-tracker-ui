import { Component } from '@angular/core'
import { SecurityService } from './shared/security.service';

@Component ({
    selector:'securities-list',
    template: `<div>
                <h1>Securities list</h1>
                <security *ngFor="let security of securities" [security]="security"></security>
                </div>`
})
export class SecuritiesListComponent
{
    securities:any;

    constructor(private securityService:SecurityService)
    {}

    ngOnInit()
    {
        this.securities = this.securityService.getSecurities();
    }
}