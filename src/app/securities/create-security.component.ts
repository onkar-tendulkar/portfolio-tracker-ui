import { Component } from '@angular/core';
import { Router } from '@angular/router';


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

    constructor(private router:Router){}

    saveSecurity(formValues)
    {
        console.log(formValues);
    }

    cancel()
    {
        this.router.navigate(['/securities']);
    }

}