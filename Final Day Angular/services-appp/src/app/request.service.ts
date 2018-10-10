import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RequestService {
  url = 'https://jsonplaceholder.typicode.com/todos/1';
  constructor(private http: HttpClient) { }

  makeRequest() {
    return this.http.get(this.url);
  }
}
