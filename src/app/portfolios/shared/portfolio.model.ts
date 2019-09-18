import { IPortfolioSecurity } from './portfolio-security.model';

export interface IPortfolio
{
    id:number
    userId:number
    name:string
    createdTime:Date
    securities?: IPortfolioSecurity[]
}