import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseurl="https://localhost:44319/";

@Injectable({
  providedIn: 'root'
})


export class ApiService {

  constructor(private http: HttpClient,
    @Inject('BASE_URL') public baseUrl: string) { }


  getList(
    url: string
  ): Observable<any> {
   
    return this.http.get<any>(
      `${baseurl}${url}`
    );
   
  }
  postData(data:any, url: string): Observable<any> {
    return this.http.post(`${baseurl}${url}`, data);
  }

  delete(url: string): Observable<any> {
    return this.http.delete(`${baseurl}${url}`);
  }
}







