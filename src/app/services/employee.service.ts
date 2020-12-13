import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  baseUrl = 'http://34.121.49.132';

  constructor(
    private http: HttpClient,

  ) { }

  addUser(loginData,apiUrl?){
    const url = `${this.baseUrl}/${apiUrl}`;
   return this.http.post(url,loginData);
  }
  getData(params,endPoint) {
    let url = `${this.baseUrl}/${endPoint}?email_id=${params}`;
    return this.http.get(url);
  }


}
