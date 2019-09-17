import { ISecurity } from './security.model';

export class SecurityService
{
    getSecurities():ISecurity[]
    {
        return SECURITIES;
    }

    getSecurity(id:number):ISecurity
    {
        return SECURITIES.find(security => security.id === id);
    }
}

const SECURITIES:ISecurity[] = [
    {"id":162,"symbol":"MSFT","name":"Microsoft Corporation","createdTime":new Date("2019-09-05T13:04:38.517+0000")},
    {"id":193,"symbol":"GOOGL","name":"Alphabet Inc","createdTime":new Date("2019-09-05T13:11:23.368+0000")}
]