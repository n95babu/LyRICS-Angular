import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class MusicService {

  private music = 'https://itunes.apple.com/search?term=';

  constructor(private http: Http) { }

  search(term: string): Observable<any> {
    return this.http.get(this.music + term + '&limit=3')
      .map(response => {
        return response.json() as string
      })
  }

}
