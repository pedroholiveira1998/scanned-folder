import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Document } from '../models/document.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private http: HttpClient ) { }
  
  public getDocuments():Observable<Document>{
    return this.http.get<Document>('http://localhost:3000/show');
  }

  public postDocuments(data: any):Observable<Document>{
    return this.http.post<Document>('http://localhost:3000/store', data);
  }

}
