import { IPortfolio } from './portfolio.model';
import { IPortfolioSecurity } from './portfolio-security.model';
import { EventEmitter } from '@angular/core';

export class PortfolioService
{
    getPortfoliosForUser(userId:number):IPortfolio[]
    {
        return PORTFOLIOS;
    }

    getPortfolio(id:number):IPortfolio
    {
        return PORTFOLIOS.find(portfolio => portfolio.id === id);
    }

    savePortfolio(portfolio:IPortfolio)
    {
        PORTFOLIOS.push(portfolio);
    }

    addSecurityToPortfolio(portfolio:IPortfolio,security:IPortfolioSecurity)
    {
        portfolio.securities.push(security);
    }
    
    searchSecurity(searchSymbol:string)
    {
        var results:IPortfolioSecurity[]=[];
        PORTFOLIOS.forEach(
            p => {
                var matchingSecurities = p.securities.filter(
                    s=> s.securitySymbol === searchSymbol);
                    matchingSecurities = matchingSecurities.map( (s:any) => 
                    {
                        s.portfolioId = p.id;
                        s.portfolioName = p.name;
                        return s;
                    });
                    results = results.concat(matchingSecurities)
            }
        )
        
        var emitter = new EventEmitter(true);
        setTimeout(() => {
            emitter.emit(results)
        , 100});

        return emitter;
    }
}

const PORTFOLIOS:IPortfolio[] = [
    {"id":1, userId: 1,"name":"Onkar","createdTime":new Date("2019-09-05T13:04:38.517+0000"),
    securities: [{"securitySymbol":"MS", "sector":"Financial Services", "units":2, "costPerShare":50,"purchaseTime":new Date()},
    {"securitySymbol":"GOOGL", "sector":"Technology", "units":1, "costPerShare":100,"purchaseTime":new Date()}]},
    
    {"id":2, userId: 2,"name":"Ragini","createdTime":new Date("2019-09-05T13:04:38.517+0000"),
    securities: [{"securitySymbol":"TSLA", "sector":"Consumer Cyclical","units":2, "costPerShare":50,"purchaseTime":new Date()},
    {"securitySymbol":"GOOGL", "sector":"Technology", "units":1, "costPerShare":100,"purchaseTime":new Date()}]},
]