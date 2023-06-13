import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviroment } from 'src/enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  urlBase = enviroment.urlBase;

  constructor(private http: HttpClient) { }

  login(item: any): Promise<any> {
    return this.http.post(this.urlBase + "signup", item).toPromise();
  }
}
