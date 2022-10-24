import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { StandingsResponse } from '../interfaces/standings.interface';

@Injectable({
  providedIn: 'root'
})
export class StandingsService {

  constructor(private http: HttpClient) { }

  getStandings(date: string): Observable<StandingsResponse> {
    return this.http.get<StandingsResponse>(`${environment.apiBaseUrl}/${date}/standings_conference.json`);
  }
}
