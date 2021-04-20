import { Component, OnInit } from '@angular/core';
import { ShowService } from '../show.service'

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  searchTerm = ''; // Bound to the search field

  constructor(private showService: ShowService) { }

  ngOnInit(): void {
  }

  // Form submit handler
  searchShow(event) {
    event.preventDefault();
    console.log("search happened");
    console.log(this.searchTerm);

    this.showService.currentSearchTerm.next(this.searchTerm);
  }

}
