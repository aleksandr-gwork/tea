import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {TeaItem} from "../../types/tea-item.type";

@Injectable()
export class HttpService {
  private url: string = 'https://testologia.ru/tea';

  constructor(private http: HttpClient) {
  }

  fetchData(query?: string): Observable<TeaItem[]> {
    let params = new HttpParams();
    if (query) {
      params = params.set('search', query);
    }
    return this.http.get<TeaItem[]>(this.url, { params });
  }

}
