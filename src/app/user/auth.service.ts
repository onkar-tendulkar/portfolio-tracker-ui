import { Injectable } from "@angular/core";
import { IUser, USER_ROLE } from './user.model';

@Injectable()
export class AuthService {
  
    currentUser:IUser
    loginUser(userName:string, password:string)
    {
        if(userName == "aa")
        {
            this.currentUser = {
            id:1,
            userName:"aa",
            firstName:"Onkar",
            lastName:"Tendulkar",
            role : USER_ROLE.ADMIN
            };
        }
        if(userName == "zz")
        {
            this.currentUser = {
            id:2,
            userName:"zz",
            firstName:"Milind",
            lastName:"Tendulkar",
            role : USER_ROLE.INVESTOR
            };
        }
    }

    isLoggedIn()
    {
        return !!this.currentUser;
    }

    isAdmin()
    {
        return this.isLoggedIn() && this.currentUser.role == USER_ROLE.ADMIN;
    }

    isInvestor()
    {
        return this.isLoggedIn() && ((this.currentUser.role == USER_ROLE.ADMIN) || (this.currentUser.role == USER_ROLE.INVESTOR));
    }

    updateCurrentUser(firstName: string, lastName: string) {
        this.currentUser.firstName = firstName;
        this.currentUser.lastName = lastName;
      }
}