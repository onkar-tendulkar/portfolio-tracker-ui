import { IPortfolio } from './portfolio.model';

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
}

const PORTFOLIOS:IPortfolio[] = [
    {"id":1, userId: 1,"name":"Onkar","createdTime":new Date("2019-09-05T13:04:38.517+0000"),
    securities: [{"securitySymbol":"MS", "units":2, "costPerShare":50,"purchaseTime":new Date()},
    {"securitySymbol":"GOOGL", "units":1, "costPerShare":100,"purchaseTime":new Date()}]},
    {"id":2, userId: 2,"name":"Ragini","createdTime":new Date("2019-09-05T13:04:38.517+0000"),
    securities: [{"securitySymbol":"TSLA", "units":2, "costPerShare":50,"purchaseTime":new Date()},
    {"securitySymbol":"GOOGL", "units":1, "costPerShare":100,"purchaseTime":new Date()}]},
]