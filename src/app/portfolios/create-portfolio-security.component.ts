import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IPortfolioSecurity } from './shared/portfolio-security.model';



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
    securitySymbol:FormControl
    sector:FormControl
    units:FormControl
    costPerShare:FormControl
    purchaseTime:FormControl

    ngOnInit(): void {
        
    this.securitySymbol = new FormControl('',[Validators.required,Validators.maxLength(5)]);
    this.sector = new FormControl('',[Validators.required]);
    this.units = new FormControl('',[Validators.required,Validators.pattern('^[1-9]\d*$')]);
    this.costPerShare = new FormControl('',[Validators.required,Validators.pattern('^[1-9]\d*$')]);
    this.purchaseTime = new FormControl('',Validators.required);
    
    this.newSecurityForm = new FormGroup({
        securitySymbol: this.securitySymbol,
        sector: this.sector,
        units: this.units,
        costPerShare: this.costPerShare,
        purchaseTime: this.purchaseTime
    });
    }

    saveSecurity(formValues:IPortfolioSecurity)
    {
        let security : IPortfolioSecurity = 
        {
            securitySymbol: formValues.securitySymbol,
            sector: formValues.securitySymbol,
            units: +formValues.units,
            costPerShare: +formValues.costPerShare,
            purchaseTime: formValues.purchaseTime
        };
        this.saveNewSecurity.emit(security);
    }
    
}