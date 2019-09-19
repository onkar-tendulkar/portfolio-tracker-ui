import { Component, Input } from '@angular/core'
import { IPortfolioSecurity } from './shared/portfolio-security.model';

@Component ({
    selector:'portfolio-securities-list',
    templateUrl: 'portfolio-security-list.component.html'
})
export class PortfolioSecuritiesListComponent
{
    @Input() securities:IPortfolioSecurity;
}