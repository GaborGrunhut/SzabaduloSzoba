import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FoglalasService {
  private apiUrl = 'http://localhost:3000/foglalasok';

  constructor(private http: HttpClient) {}

  getFoglalasok(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  createFoglalas(foglalas: any): Observable<any> {
    return this.http.post(this.apiUrl, foglalas);
  }
}
