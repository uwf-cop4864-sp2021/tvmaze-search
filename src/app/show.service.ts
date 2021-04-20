import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Show } from './entities/show';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ShowService {

  constructor(private httpClient: HttpClient) { }


  // The search term we are looking for right now.
  // Will be updated whenever the search term changes.
  public currentSearchTerm = new Subject<string>();

  public searchTermChanges$ = this.currentSearchTerm.asObservable();

  /**
   * Searches shows for a search term
   * @param searchTerm The thing I'm search for
   * @returns An array of search results
   */
  searchShows(searchTerm: string): Observable<Show[]> {
    const url = `http://api.tvmaze.com/search/shows?q=${searchTerm}`;

    // Make an HTTP call
    return this.httpClient.get(url).pipe(

      // For every response we get (really only one)
      map( (responseArray: any) => {

        // For every show that came back (multiple shows)
        return responseArray.map ( r => {
          // show and score
          return {
            id: r.show.id,
            url: r.show.url,
            name: r.show.name,
            image: r.show.image?.medium
          }
        } );

      })
    );
  }
}
