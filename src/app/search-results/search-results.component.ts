import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Show } from '../entities/show';
import { ShowService } from '../show.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  public currentSearchTerm = '';

  //public searchResults: Show[] = [];

  public searchResults$: Observable<Show[]>;

  constructor(private showService: ShowService) { }

  ngOnInit(): void {

    this.showService.searchTermChanges$.subscribe( newTerm => {
      // Update the internal copy of the term
      this.currentSearchTerm = newTerm;

      // Perform a search with this term
      this.searchResults$ = this.showService.searchShows(newTerm);
      
      // .subscribe( results => {
      //   console.log(results);
      //   this.searchResults = results;
      // });

    });
  }

}
