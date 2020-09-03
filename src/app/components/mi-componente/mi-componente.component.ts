import { Component } from '@angular/core';

@Component({
    //Debe llevar obligatoriamente 2 propiedades: selector y template(o templateUrl)
    selector: 'mi-componente',
    templateUrl: './mi-componente.component.html'
})

export class MiComponente{
    public titulo: string;
    public comentario: string;
    public year: number;
    public nombre: string;
    public mostrarPeliculas: boolean;
    
    constructor(){
        this.titulo='Bienvenido';
        this.comentario='Esto es un comentario'
        this.year=2020;
        this.nombre='Gloria';
        this.mostrarPeliculas=true;
    }

    ocultarPeliculas(){
        this.mostrarPeliculas=false;
    }
}