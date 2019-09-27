import { Component, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IPortfolio } from './shared/portfolio.model';
import { AuthService } from '../user/auth.service';


@Component({
    selector:'create-portfolio',
    templateUrl:'create-portfolio.component.html',
    styles:[`
    em { float: right; color: #E05C65; padding-left: 10px; }
    .error input { background-color: #E3C3C5 }
    .error ::-webkit-input-placeholder { color: #999; }
`]
})
export class CreatePortfolioComponent
{
    @Output() saveNewPortfolio = new EventEmitter();

    newPortfolioForm:FormGroup
    portfolioName:FormControl

    constructor(private authService:AuthService){}

    ngOnInit()
    {
        this.portfolioName = new FormControl('',[Validators.required,Validators.maxLength(20)]);

        this.newPortfolioForm = new FormGroup({
            portfolioName: this.portfolioName
        });
    }

    savePortfolio(formValues)
    {
        let portfolio : IPortfolio = 
        {
            id:undefined,
            name:formValues.portfolioName,
            userId:this.authService.currentUser.id
        };
        console.log("a");
        console.log(formValues);
        this.saveNewPortfolio.emit(portfolio);
    }
}