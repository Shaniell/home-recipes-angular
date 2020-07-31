import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(private http: HttpClient) { }


  getDirectionTypes() : string[]{ //Observable<any>{
    return ["cook", "cut", "soak", "bake", "fry", "boil", "peel", "sprinkle", "refrigirate", "freeze"]; //this.http.get(`${environment.apiUrl}/utils/directionTypes`,{}); 
  }

  getMeasurementTypes() : string[]{  //Observable<any>{
    return ["Kg", "Mg", "Liter", "Mililiter"];//this.http.get(`${environment.apiUrl}/utils/measurementTypes`,{});
  }


}
