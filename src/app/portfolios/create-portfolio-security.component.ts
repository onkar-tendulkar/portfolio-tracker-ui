import { Component, Input, OnInit, Output } from '@angular/core';
import { IPortfolio } from './shared/portfolio.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IPortfolioSecurity } from './shared/portfolio-security.model';
import { EventEmitter } from 'events';

@Component({
    selector: 'create-portfpolio-security',
    templateUrl: 'create-portfolio-security.component.html',
    styles: [`
            em { float: right; color: #E05C65; padding-left: 10px; }
            .error input { background-color: #E3C3C5 }
            .error ::-webkit-input-placeholder { color: #999; }
  `]
})
export class CreatePortfolioSecurityComponent implements OnInit
{
    @Output() saveNewSecurity = new EventEmitter();
    
    newSecurityForm:FormGroup
    symbol:FormControl
    units:FormControl
    costPerShare:FormControl
    purchaseTime:FormControl

    ngOnInit(): void {
        
    this.symbol = new FormControl('',[Validators.required,Validators.maxLength(5)]);
    this.units = new FormControl('',[Validators.required,Validators.pattern('^[1-9]\d*$')]);
    this.costPerShare = new FormControl('',[Validators.required,Validators.pattern('^[1-9]\d*$')]);
    this.purchaseTime = new FormControl('',Validators.required);
    
    this.newSecurityForm = new FormGroup({
        symbol: this.symbol,
        units: this.units,
        costPerShare: this.costPerShare,
        purchaseTime: this.purchaseTime
    });
    }

    saveSecurity(formValues:IPortfolioSecurity)
    {
        console.log(formValues);
    }
    
}