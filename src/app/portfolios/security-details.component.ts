import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router';

@Component ({
    template: `<h1>Details of {{symbol}}</h1>
              <a [routerLink]="['/portfolios', portfolioId]" queryParamsHandling="preserve">Back to Portfolio</a>`
})
export class PortfolioSecurityDetailsComponent
{
    symbol:String;
    portfolioId:String;

    constructor(private route:ActivatedRoute)
    {}

    ngOnInit()
    {
        this.portfolioId = this.route.snapshot.paramMap.get('portfolioId');
        this.symbol = this.route.snapshot.paramMap.get('symbol');
    }
}
