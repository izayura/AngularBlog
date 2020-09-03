import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  public name: string;
  public lastName: string;

  constructor( 
    private _route: ActivatedRoute,
    private _router: Router
  ) {    }

  ngOnInit(){
    this._route.params.subscribe((params:Params)=>{
      this.name=params.name;
      this.lastName=params.lastName;
    });
  }

  redirection(){
    //this._router.navigate(['/form']);
    this._router.navigate(['/page','Gloria','Robles']);
  }

}
