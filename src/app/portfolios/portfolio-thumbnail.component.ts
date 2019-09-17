import { Component, Input } from '@angular/core'
import { IPortfolio } from './shared/portfolio.model';

@Component ({
    selector:'portfolio',
    template: `<div [routerLink]="['/portfolios',portfolio.id]"><h5>{{portfolio.name}}</h5></div>`
})
export class PortfolioThumbnailComponent
{    
    @Input() portfolio:IPortfolio ;
}