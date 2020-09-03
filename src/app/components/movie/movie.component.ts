import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  constructor() { }

  @Input() movie: Movie;
  @Output() SelectFav = new EventEmitter();

  ngOnInit(): void {
  }

  select(event, movie){
    console.log(event);
    console.log(movie);
    this.SelectFav.emit({
      movie:movie
    });
  }

}
