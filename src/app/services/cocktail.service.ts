import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {
  baseUrl = 'http://34.121.49.132';

  constructor(
    private http: HttpClient,

  ) { }

  getAllCategories(queryParams) {
    queryParams = queryParams == 2 ? 'c' : 'i';
    const url = `${this.baseUrl}/list.php`;
    return this.http.get(`${url}?${queryParams}=list`);
  }
  addUser(loginData,apiUrl?){
    const url = `${this.baseUrl}/${apiUrl}`;
   return this.http.post(url,loginData);
  }
  fetchListData(params) {
    let url = `${this.baseUrl}/user_job_history?email_id=${params}`;
    return this.http.get(url);
  }

  getUserName(queryParams){
    let url = `${this.baseUrl}/user?email_id=${queryParams}`;
    return this.http.get(url);
  }

}
