import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CoachResponse } from '../interfaces/coaches.interface';

@Injectable({
  providedIn: 'root'
})
export class CoachesService {

  constructor(private http: HttpClient) { }

  public getCoachList(year: number): Observable<CoachResponse>{
    return this.http.get<CoachResponse>(`${environment.apiBaseUrl}/${year}/coaches.json`)
  }

}
