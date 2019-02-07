import { Injectable } from '@angular/core';
import { SignnupComponent } from '../signnup/signnup.component';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ActivateService {
  readonly rootUrl = 'http://ffcf89b1.ngrok.io';
  constructor(private su: SignnupComponent, private http: HttpClient) { }


  activateUser ( otp: number) {

    return this.http.post(this.rootUrl + '/api/activate/'+ this.su.id , otp );
  }
  
}


