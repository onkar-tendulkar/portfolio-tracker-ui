import { Component, Input } from '@angular/core'
import { ActivatedRoute, Params, Router } from '@angular/router';
import { IPortfolio } from './shared/portfolio.model';
import { PortfolioService } from './shared/portfolio.service';
import { IPortfolioSecurity } from './shared/portfolio-security.model';

@Component ({
    templateUrl: 'portfolio-details.component.html'
})
export class PortfolioDetailsComponent
{
    portfolio:IPortfolio;
    addMode:boolean;

    constructor(private portfolioService: PortfolioService, private route: ActivatedRoute,
                private router: Router)
    {}

    ngOnInit()
    {
      this.route.data.subscribe(
        data => {
          this.portfolio = data['portfolio'][0];
          this.portfolio.securities = data['securities'];
        }
      );
    }

    addSecurity()
    {
        this.addMode = true;
    }

    cancelNewSecurity()
    {
        this.addMode = false;
    }

    saveNewSecurity(security:IPortfolioSecurity)
    {
        security.portfolioId = this.portfolio.id;
        this.addMode = false;
        this.portfolioService.addSecurityToPortfolio(this.portfolio, security).subscribe(
          res => {
            if (res['id'] !== undefined)
            {
              this.router.navigate(['/portfolios/' + this.portfolio.id]);
            }
          }
        );
    }
}
