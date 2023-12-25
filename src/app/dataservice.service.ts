import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataserviceService {
  constructor(private http: HttpClient) {}
  getLiveViewData(): Observable<any> {
    return this.http.get<any>('assets/sample-live-view-resp.json');
  }
}
