import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable()
export class AuthService {

    private login="http://localhost:3000/details";

    constructor(private http:HttpClient) { }

    getDetails(){
        return this.http.get(this.login);
    }
    signIn(username:string,password:string){
        return this.http.post(this.login+'signin',{
            username,password
        })
    }
}
