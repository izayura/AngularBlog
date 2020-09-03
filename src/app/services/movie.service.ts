import { Injectable } from '@angular/core';
import { Movie } from '../models/movie';

@Injectable()
export class MovieService{

    public movies: Movie[];

    constructor(){
        this.movies=[
            new Movie('Big Fish', 2005, 'https://pics.filmaffinity.com/Big_Fish-838287233-large.jpg' ),
            new Movie('Life Aquatic', 2008, 'https://pics.filmaffinity.com/Life_Aquatic-443622863-large.jpg'),
            new Movie('Amelie', 2000, 'https://pics.filmaffinity.com/Am_lie-848337470-mmed.jpg'),
            new Movie('Moulin Rouge', 2002, 'https://pics.filmaffinity.com/Moulin_Rouge-702295729-large.jpg' ),
            new Movie('Scott Pilgrim', 2010, 'https://pics.filmaffinity.com/Scott_Pilgrim_contra_el_mundo-809979700-mmed.jpg' )
            ]
    }
    helloWorld(){
        return "Hello World from an Angular Service";
    }

    getMovies(){
        return this.movies;
    }
}