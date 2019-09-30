import { Component } from '@angular/core'
import { AuthService } from '../user/auth.service';
import { IPortfolioSecurity } from '../portfolios/shared/portfolio-security.model';
import { PortfolioService } from '../portfolios/shared/portfolio.service';

@Component ({
    selector:'nav-bar',
    templateUrl: './navbar.component.html',
    styles: [`
            li > a.active { color: #F97924; }
            `]
})
export class NavBarComponent
{ 
    foundPortfolioSecurities:any;

    constructor (private auth:AuthService,private portfolioService:PortfolioService){}
    
    searchSecurity(searchSymbol)
    {
        this.portfolioService.searchPortfolios(searchSymbol).subscribe
            ( securities => {
                this.foundPortfolioSecurities = securities;
            }
        )
    }
}