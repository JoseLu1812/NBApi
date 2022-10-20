import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PlayerResponse } from "src/app/interfaces/players.interface";


@Injectable({
  providedIn: 'root'
})
export class PlayersService {



  constructor(private http: HttpClient) { }

  public getPlayerList(year: number): Observable<PlayerResponse> {
    return this.http.get<PlayerResponse>(`${environment.apiBaseUrl}/${year}/players.json`)
  }

  public getPlayerDetails(year: number,id: string): Observable<PlayerResponse> {
    return this.http.get<PlayerResponse>(`${environment.apiBaseUrl}/${year}/players/${id}_profile.json`)
  }

}
