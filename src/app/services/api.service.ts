import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  constructor(private http: HttpClient,
    @Inject('BASE_URL') public baseUrl: string) { }

  create(data:any, url: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/${url}`, data, { responseType: 'text' });
  }

  getList(
    url: string
  ): Observable<any> {
    console.log()
    return this.http.get<any>(
      `${this.baseUrl}api/${url}`
    );
   
  }

  postData(data:any, url: string, headers:any): Observable<any> {
    return this.http.post(`${this.baseUrl}api/${url}`, data, { headers });
  }
  delete(url: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}api/${url}`);
  }
}







