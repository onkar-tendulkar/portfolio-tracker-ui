import { Component, Input, OnChanges } from '@angular/core'
import { IPortfolio } from './shared/portfolio.model';
import { IPortfolioSecurity } from './shared/portfolio-security.model';

@Component ({
    selector:'portfolio-securities-list',
    templateUrl: 'portfolio-security-list.component.html'
})
export class PortfolioSecuritiesListComponent implements OnChanges
{
    
    @Input() portfolio:IPortfolio;
    
    visibleSecurities:IPortfolioSecurity[];

    sectors : string[] = ["All"];
    sectorFilter:string;
    sortBy:string;

    ngOnInit()
    {
        if(this.portfolio)
        {
            this.sectors = ["All"];
            this.sectors = this.sectors.concat(this.portfolio.securities.map(s => s.sector));
            this.sectorFilter = "All";

            this.sortBy = "symbol";

            this.onChange();
        }
        
    }

    ngOnChanges(): void {
        if(this.sortBy!=undefined && this.sectorFilter!=undefined && this.portfolio!=undefined)
        {
            this.onChange();
        }
    }

    onChange()
    {
        this.applyFilter();
        this.sort();
    }

    applyFilter()
    {
        console.log(this.portfolio.securities);
        if(this.sectorFilter=="All")
        {
            this.visibleSecurities = this.portfolio.securities.slice(0);
        }
        else
        {
            this.visibleSecurities = this.portfolio.securities.filter(s => 
                {
                    return s.sector.toUpperCase() === this.sectorFilter.toUpperCase();
                });
        }
    }

    sort()
    {
        if(this.sortBy==='price')
        {
            this.visibleSecurities.sort(this.sortByPrice);
        }
        else
        {
            this.visibleSecurities.sort(this.sortBySymbol);
        }
    }

    sortBySymbol(s1:IPortfolioSecurity,s2:IPortfolioSecurity)
    {
        if(s1.symbol > s2.symbol)
        {
            return 1;
        }
        else if(s1.symbol === s2.symbol)
        {
            return 0;
        }
        else
        {
            return -1;
        }
    }

    sortByPrice(s1:IPortfolioSecurity,s2:IPortfolioSecurity)
    {
        return s1.costPerUnit - s2.costPerUnit;
    }
}