import { Component } from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './profile.component.html',
  styles: [`
            em { float: right; color: #E05C65; padding-left: 10px; }
            .error input { background-color: #E3C3C5 }
            .error ::-webkit-input-placeholder { color: #999; }
  `]
})
export class ProfileComponent {
  profileForm:FormGroup
  firstName:FormControl
  lastName:FormControl

  constructor(private authServ:AuthService,private router:Router)
  {}

  ngOnInit()
  {
    this.firstName = new FormControl(this.authServ.currentUser.firstName,
      [Validators.required,Validators.pattern('[A-Za-z].*')]);
    this.lastName = new FormControl(this.authServ.currentUser.lastName,
      [Validators.required,Validators.pattern('[A-Za-z].*')]);

    this.profileForm = new FormGroup(
    {
      firstName: this.firstName,
      lastName: this.lastName
    })
  }

  cancel()
  {
    this.router.navigate(['securities']);
  }

  saveProfile(formValues)
  {
    if(this.profileForm.valid)
    {
      this.authServ.updateCurrentUser(formValues.firstName,formValues.lastName);
      this.router.navigate(['securities']);
    }
    
  }

  validateFirstName()
  {
    return this.firstName.valid || this.firstName.untouched;
  }
   
  validateLastName()
  {
    return this.lastName.valid || this.lastName.untouched;
  }
}