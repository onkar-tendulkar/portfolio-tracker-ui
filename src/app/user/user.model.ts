export interface IUser
{
    id:number;
    userName:string;
    firstName:string;
    lastName:string;
    role:USER_ROLE;
}

export enum USER_ROLE
{
    INVESTOR,
    ADMIN
}