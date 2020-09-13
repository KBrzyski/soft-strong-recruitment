import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


export class Event {
  id: string;
  type: string;
  created_at: Date;
  repo: Repo;
}

class Repo {
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class Task7Service {

  constructor(private http: HttpClient) { }

  public getUsersList(name: string): Observable<Event[]> {
    const header = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get('https://api.github.com/users/'+ name +'/events/public',
      { headers: header }).pipe(
        map((result: Event[]) => {
          return result;
        })
      );
  }
}
