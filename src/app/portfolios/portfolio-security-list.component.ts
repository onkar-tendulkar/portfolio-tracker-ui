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
    sectorFilter:String;

    ngOnInit()
    {
        if(this.securities)
        {
            this.sectors = ["All"];
            this.sectors = this.sectors.concat(this.securities.map(s => s.sector));
        }
        this.visibleSecurities = this.securities.slice(0);
    }

    onChange()
    {
        this.applyFilter();
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
}