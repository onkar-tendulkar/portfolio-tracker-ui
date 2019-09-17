import { Component, SystemJsNgModuleLoader } from "@angular/core";
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
    templateUrl : "/login.component.html",
    styles : [`
            em {    float:right; color:#E05C65; padding-left:10px}
    `]
})
export class LoginComponent
{

    constructor(private authService:AuthService,private router:Router){}

    login(formValues)
    {
        this.authService.loginUser(formValues.userName,formValues.password)
        this.router.navigate(['securities']);
    }

    cancel()
    {
        this.router.navigate(['securities']);
    }
}