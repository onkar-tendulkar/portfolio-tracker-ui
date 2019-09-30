import { IPortfolio } from './portfolio.model';
import { IPortfolioSecurity } from './portfolio-security.model';
import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from 'src/app/user/auth.service';


@Injectable()
export class PortfolioService
{
    constructor(private http:HttpClient,private authService:AuthService)
    {}

    /*Port folio lists*/
    getPortfoliosForUser(userId:number):Observable<IPortfolio[]>
    {
        var portFolioList:IPortfolio;
        return this.http.get<IPortfolio[]>('http://localhost:8080/api/portfolio?userId='+this.authService.currentUser.id)
        .pipe(catchError(this.handleError<IPortfolio[]>('getPortfoliosForUser',[])))
        ;
    }
    
    /*Portfolio object*/
    createPortfolio(portfolio:IPortfolio):Observable<Object>
    {
        return this.http.post('http://localhost:8080/api/portfolio',portfolio)
        .pipe(catchError(this.handleError<Object>('getPortfoliosForUser',undefined)))
        ;
    }

    /*Portfolio with securitites*/
    getPortfolioWithSecurities(portfolioId:number):Observable<IPortfolio>
    {
        return this.http.get<IPortfolio>('http://localhost:8080/api/portfolio_security?portfolioId='+portfolioId)
        .pipe(catchError(this.handleError<IPortfolio>('getSecuritiesForPortfolio',undefined)));
    }

    /*To be converted*/
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
                    s=> s.symbol === searchSymbol);
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

    getHardcodedPortfolios(userId:number):Observable<IPortfolio[]>
    {
        return of(PORTFOLIOS);
    }

    handleError<T>(operation = 'operation', result?: T)
    {
        return (error:any): Observable<T> =>
        {
            console.error(error);
            return of(result as T);
        }
    }
}

const PORTFOLIOS:IPortfolio[] = [
    {"id":1, userId: 1,"name":"Onkar","createdTime":new Date("2019-09-05T13:04:38.517+0000"),
    securities: [{"symbol":"MS", "sector":"Financial Services", "units":2, "costPerUnit":50,"datePurchased":new Date()},
    {"symbol":"GOOGL", "sector":"Technology", "units":1, "costPerUnit":100,"datePurchased":new Date()}]},
    
    {"id":2, userId: 2,"name":"Ragini","createdTime":new Date("2019-09-05T13:04:38.517+0000"),
    securities: [{"symbol":"TSLA", "sector":"Consumer Cyclical","units":2, "costPerUnit":50,"datePurchased":new Date()},
    {"symbol":"GOOGL", "sector":"Technology", "units":1, "costPerUnit":100,"datePurchased":new Date()}]},
]