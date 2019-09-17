import { Component, Input } from '@angular/core'
import { SecurityService } from './shared/security.service';
import { ActivatedRoute } from '@angular/router';

@Component ({
    template: `<h1>{{security.name}}</h1>
                <h5>{{security.symbol}}</h5>`
})
export class SecurityDetailsComponent
{
    security:any;

    constructor(private securityService:SecurityService,private route:ActivatedRoute)
    {}

    ngOnInit()
    {
        /* + is just to type cast to number*/
        this.security = this.securityService.getSecurity(
            +this.route.snapshot.params['id']
        );
    }

}