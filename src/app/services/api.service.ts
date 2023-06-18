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
   
    return this.http.get<any>(
      `${this.baseUrl}${url}`
    );
   
  }
  postData(data:any, url: string): Observable<any> {
    return this.http.post(`${this.baseUrl}${url}`, data);
  }

  delete(url: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}${url}`);
  }
}







