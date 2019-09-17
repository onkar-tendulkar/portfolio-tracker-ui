import { IPortfolio } from './portfolio.model';

export class PortfolioService
{
    getSecurities():IPortfolio[]
    {
        return PORTFOLIOS;
    }

    getSecurity(id:number):IPortfolio
    {
        return PORTFOLIOS.find(portfolio => portfolio.id === id);
    }

    saveSecurity(portfolio:IPortfolio)
    {
        PORTFOLIOS.push(portfolio);
    }
}

const PORTFOLIOS:IPortfolio[] = [
    {"id":1, userId: 1,"name":"Onkar","createdTime":new Date("2019-09-05T13:04:38.517+0000")},
    {"id":2, userId: 2,"name":"Ragini","createdTime":new Date("2019-09-05T13:04:38.517+0000")},
]