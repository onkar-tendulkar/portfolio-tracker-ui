import { Component, Input, OnChanges } from '@angular/core'
import { IPortfolio } from './shared/portfolio.model';
import { IPortfolioSecurity } from './shared/portfolio-security.model';
import { ActivatedRoute } from '@angular/router';

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

    constructor(private route:ActivatedRoute)
    {}

    ngOnInit()
    {
        if(this.portfolio)
        {
            /*If you need hardcoded portfolio for testing with sector

            this.portfolio = {"id":289,"userId":1,"name":"Onkar's portfolio","createdTime":new Date("2019-09-06T05:57:53.955+0000"),
            "securities":
                [{"symbol":"MSFT", sector:"Software","units":2,"costPerUnit":140.05,"datePurchased":new Date("2019-09-05"),"portfolioId":289,"portfolioName":"Onkar's portfolio"},
                {"symbol":"GOOGL", sector:"Software","units":1,"costPerUnit":1212.19,"datePurchased":new Date("2019-09-05"),"portfolioId":289,"portfolioName":"Onkar's portfolio"},
                {"symbol":"AAPL", sector:"Hardware","units":3,"costPerUnit":220.05,"datePurchased":new Date("2019-09-05"),"portfolioId":289,"portfolioName":"Onkar's portfolio"}
                ]};*/

            this.sectors = ["All"];
            this.sectors = this.sectors.concat(this.portfolio.securities.map(s => s.sector));

            this.sortBy = "symbol";

            if(this.route.snapshot.queryParamMap.get('sectorFilter') !== undefined)
            {
              this.sectorFilter = this.route.snapshot.queryParamMap.get('sectorFilter');
            }

            if(this.route.snapshot.queryParamMap.get('sortBy') !== undefined)
            {
              this.sortBy = this.route.snapshot.queryParamMap.get('sortBy');
            }

            this.onChange();
        }

    }

    ngOnChanges(): void {
        if(this.sortBy!=undefined && this.sectorFilter!=undefined && this.portfolio!=undefined)
        {
            console.log(this.sectorFilter);
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
        if(this.sectorFilter==undefined || this.sectorFilter=="All")
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
