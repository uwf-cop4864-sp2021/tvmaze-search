import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  searchTerm = ''; // Bound to the search field

  constructor() { }

  ngOnInit(): void {
  }

  searchShow(event) {
    event.preventDefault();
    console.log("search happened");
    console.log(this.searchTerm);
  }

}
