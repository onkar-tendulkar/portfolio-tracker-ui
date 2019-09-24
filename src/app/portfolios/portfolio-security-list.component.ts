import { Component, Input } from '@angular/core'
import { IPortfolioSecurity } from './shared/portfolio-security.model';

@Component ({
    selector:'portfolio-securities-list',
    templateUrl: 'portfolio-security-list.component.html'
})
export class PortfolioSecuritiesListComponent
{
    @Input() securities:IPortfolioSecurity[];
    
    visibleSecurities:IPortfolioSecurity[];

    sectors : string[] = ["All"];
    sectorFilter:string;
    sortBy:string;

    ngOnInit()
    {
        if(this.securities)
        {
            this.sectors = ["All"];
            this.sectors = this.sectors.concat(this.securities.map(s => s.sector));
            this.sectorFilter = "All";

            this.sortBy = "symbol";
        }
        this.onChange();
    }

    onChange()
    {
        this.applyFilter();
        this.sort();
    }

    applyFilter()
    {
        if(this.sectorFilter=="All")
        {
            this.visibleSecurities = this.securities.slice(0);
        }
        else
        {
            this.visibleSecurities = this.securities.filter(s => 
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
        if(s1.securitySymbol > s2.securitySymbol)
        {
            return 1;
        }
        else if(s1.securitySymbol === s2.securitySymbol)
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
        return s1.costPerShare - s2.costPerShare;
    }
}