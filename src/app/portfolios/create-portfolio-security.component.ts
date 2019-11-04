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
    @Output() cancelNewSecurity = new EventEmitter();

    newSecurityForm:FormGroup
    symbol:FormControl
    units:FormControl
    costPerUnit:FormControl
    datePurchased:FormControl

    ngOnInit(): void {

    this.symbol = new FormControl('',[Validators.required,Validators.maxLength(5)]);
    this.units = new FormControl('',[Validators.required,Validators.pattern('^[1-9]\d*$')]);
    this.costPerUnit = new FormControl('',[Validators.required,Validators.pattern('^[1-9]\d*$')]);
    this.datePurchased = new FormControl('',Validators.required);

    this.newSecurityForm = new FormGroup({
        symbol: this.symbol,
        units: this.units,
        costPerUnit: this.costPerUnit,
        datePurchased: this.datePurchased
    });
    }

    saveSecurity(formValues:IPortfolioSecurity)
    {
        let security : IPortfolioSecurity =
        {
            symbol: formValues.symbol,
            units: +formValues.units,
            costPerUnit: +formValues.costPerUnit,
            datePurchased: formValues.datePurchased
        };
        this.saveNewSecurity.emit(security);
    }

}
