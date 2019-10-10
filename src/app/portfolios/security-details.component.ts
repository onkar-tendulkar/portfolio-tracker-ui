import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router';

@Component ({
    template: '<h1>Details of {{symbol}}<h1>'
})
export class PortfolioSecurityDetailsComponent
{
    symbol:String;

    constructor(private route:ActivatedRoute)
    {}

    ngOnInit()
    {
        this.symbol = this.route.snapshot.data['symbol'];
    }
}