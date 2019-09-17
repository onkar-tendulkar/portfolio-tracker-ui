import { Component, Input } from '@angular/core'

@Component ({
    selector:'security',
    template: `<div [routerLink]="['/securities',security.id]"><h5>{{security.symbol}} :: {{security.name}}</h5></div>`
})
export class SecurityComponent
{    
    @Input() security:any ;
}