import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TeamResponse } from 'src/app/interfaces/teams.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  constructor(private http: HttpClient) { }

  getTeams(year: number): Observable<TeamResponse> {
    return this.http.get<TeamResponse>(`${environment.apiBaseUrl}/${year}/teams.json`)
  }

}
