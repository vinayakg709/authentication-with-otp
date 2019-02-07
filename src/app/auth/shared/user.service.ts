import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { User } from "./user.model";

@Injectable({ providedIn: 'root' })
export class UserService{
    id: number;
    readonly rootUrl = 'http://ffcf89b1.ngrok.io';
    constructor(private http: HttpClient) { }

    registerUser(user: User){
        const body: User = {
            username: user.username,
            email: user.email,
            password: user.password,
            confirm_password: user.confirm_password
        
        }
        console.log(body);
        

    return this.http.post(this.rootUrl + '/api/signup/', body);    
    }

    

    
    

}