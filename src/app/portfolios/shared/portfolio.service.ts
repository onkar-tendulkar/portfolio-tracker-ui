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
    constructor(private http: HttpClient, private authService: AuthService)
    {}

    /*Port folio lists*/
    getPortfoliosForUser(userId: number): Observable<IPortfolio[]>
    {
        var portFolioList: IPortfolio;
        return this.http.get<IPortfolio[]>('http://localhost:8080/api/portfolio?userId=' + this.authService.currentUser.id)
        .pipe(catchError(this.handleError<IPortfolio[]>('getPortfoliosForUser', [])))
        ;
    }

    /*Portfolio object*/
    createPortfolio(portfolio: IPortfolio): Observable<Object>
    {
        return this.http.post('http://localhost:8080/api/portfolio', portfolio)
        .pipe(catchError(this.handleError<Object>('getPortfoliosForUser', undefined)))
        ;
    }

    /*Portfolio with securitites*/
    getPortfolioWithoutSecurities(portfolioId: number): Observable<IPortfolio[]>
    {
        return this.http.get<IPortfolio[]>('http://localhost:8080/api/portfolio?portfolioId=' + portfolioId + '&userId=' + this.authService.currentUser.id)
        .pipe(catchError(this.handleError<IPortfolio[]>('getSecuritiesForPortfolio', undefined)));
    }

    getSecuritiesForPortfolio(portfolioId: number): Observable<IPortfolioSecurity[]>
    {
        // tslint:disable-next-line: max-line-length
        return this.http.get<IPortfolioSecurity[]>('http://localhost:8080/api/portfolio_security?portfolioId=' + portfolioId + '&userId=' + this.authService.currentUser.id)
        .pipe(catchError(this.handleError<IPortfolioSecurity[]>('getSecuritiesForPortfolio', undefined)));
    }

    searchPortfolios(searchSymbol: string): Observable<IPortfolioSecurity[]>
    {
        return this.http.get<IPortfolioSecurity[]>('http://localhost:8080/api/portfolio_security?userId=' + this.authService.currentUser.id + '&symbol=' + searchSymbol)
        .pipe(catchError(this.handleError<IPortfolioSecurity[]>('searchPortfolios', [])));
    }

    addSecurityToPortfolio(portfolio: IPortfolio, security: IPortfolioSecurity): Observable<Object>
    {
      return this.http.post('http://localhost:8080/api/portfolio_security', security);
    }


    getHardcodedPortfolios(userId: number): Observable<IPortfolio[]>
    {
        return of(PORTFOLIOS);
    }

    handleError<T>(operation = 'operation', result?: T)
    {
        return (error: any): Observable<T> =>
        {
            console.error(error);
            return of(result as T);
        }
    }
}

const PORTFOLIOS: IPortfolio[] = [
    {"id": 1, userId: 1, "name": "Onkar", "createdTime": new Date("2019-09-05T13:04:38.517+0000"),
    securities: [{"symbol": "MS", "sector": "Financial Services", "units": 2, "costPerUnit": 50, "datePurchased": new Date()},
    {"symbol": "GOOGL", "sector": "Technology", "units": 1, "costPerUnit": 100, "datePurchased": new Date()}]},

    {"id": 2, userId: 2, "name": "Ragini", "createdTime": new Date("2019-09-05T13:04:38.517+0000"),
    securities: [{"symbol": "TSLA", "sector": "Consumer Cyclical", "units": 2, "costPerUnit": 50, "datePurchased": new Date()},
    {"symbol": "GOOGL", "sector": "Technology", "units": 1, "costPerUnit": 100, "datePurchased": new Date()}]},
]
