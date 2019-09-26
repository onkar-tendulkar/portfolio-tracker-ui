import { Component, Input } from '@angular/core'
import { ActivatedRoute, Params } from '@angular/router';
import { IPortfolio } from './shared/portfolio.model';
import { PortfolioService } from './shared/portfolio.service';



@Component ({
    templateUrl: 'portfolio-details.component.html'
})
export class PortfolioDetailsComponent
{
    portfolio:IPortfolio;
    addMode:boolean;

    constructor(private portfolioService:PortfolioService,private route:ActivatedRoute)
    {}

    ngOnInit()
    {
        /* + is just to type cast to number*/
        this.addMode=false;

        this.route.params.forEach((params:Params) => {
            this.portfolio = this.portfolioService.getPortfolio(
                +params['id']); 
                console.log(this.portfolio);                   
        });
    }

    addSecurity()
    {
        this.addMode=true;
    }

    saveNewSecurity(event)
    {
        this.portfolioService.addSecurityToPortfolio(this.portfolio, event);   
        this.addMode=false;
    }
}