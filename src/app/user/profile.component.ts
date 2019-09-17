import { Component } from '@angular/core'
import { FormGroup, FormControl } from '@angular/forms'
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './profile.component.html',
})
export class ProfileComponent {
  profileForm:FormGroup

  constructor(private authServ:AuthService,private router:Router)
  {}

  ngOnInit()
  {
    let firstName = new FormControl(this.authServ.currentUser.firstName);
    let lastName = new FormControl(this.authServ.currentUser.lastName);

    this.profileForm = new FormGroup(
    {
      firstName: firstName,
      lastName: lastName
    })
  }

  cancel()
  {
    this.router.navigate(['securities']);
  }

  saveProfile(formValues)
  {
    this.authServ.updateCurrentUser(formValues.firstName,formValues.lastName);
    this.router.navigate(['securities']);
  }
       
}