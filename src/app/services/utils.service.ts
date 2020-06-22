import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(private http: HttpClient) { }


  getDirectionTypes() : Observable<any>{
    return this.http.get(`${environment.apiUrl}/utils/directionTypes`,{});
  }

  getMeasurementTypes() : Observable<any>{
    return this.http.get(`${environment.apiUrl}/utils/measurementTypes`,{});
  }


}
