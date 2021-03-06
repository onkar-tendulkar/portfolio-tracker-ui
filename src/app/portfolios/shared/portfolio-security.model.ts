export interface IPortfolioSecurity
{
    symbol:string
    sector?:string
    units:number
    costPerUnit:number
    datePurchased:Date
    portfolioName?:string
    portfolioId?:number
}