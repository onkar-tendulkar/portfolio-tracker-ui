import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SecurityService } from './shared/security.service';


@Component({
    templateUrl:'create-security.component.html',
    styles: [`
            em { float: right; color: #E05C65; padding-left: 10px; }
            .error input { background-color: #E3C3C5 }
            .error ::-webkit-input-placeholder { color: #999; }
  `]
})
export class CreateSecurityComponent
{
    newSecurity

    constructor(private router:Router, private service:SecurityService){}

    saveSecurity(formValues)
    {
        formValues.createdTime = new Date("2019-09-05T13:04:38.517+0000");
        formValues.id = 999;
        this.service.saveSecurity(formValues);
    }

    cancel()
    {
        this.router.navigate(['/securities']);
    }

}
