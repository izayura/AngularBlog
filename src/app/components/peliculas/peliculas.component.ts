import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { Movie } from '../../models/movie';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css'],
  providers: [MovieService]
})
export class PeliculasComponent implements OnInit {
  public titulo: string;
  public movies: Array<Movie>;
  public favMovie: Movie; 
  public date: any;

  constructor(
    private _movieService: MovieService
  ) { 
    this.titulo='Componente peliculas';
    this.movies=this._movieService.getMovies();
    console.log(this.movies);
    this.date=new Date(2020, 8, 3);
  }

  //Primer metodo que se ejecuta despues de cargar el constructor
  ngOnInit() {
    console.log(this._movieService.helloWorld());
  }

  ngDoCheck(){
  } 

  cambiarTitulo(){
    this.titulo='El titulo ha sido cambiado';
  }

  ngOnDestroy(){
    console.log("Se va a eliminar el componente");
  }

  showFavs(event){
    console.log(event);
    this.favMovie=event.movie;
  }

}
