import { Component, OnInit } from '@angular/core';
import { Global } from '../../services/global';
import { ArticleService } from '../../services/article.service';
import { Article } from '../../models/article';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ArticleService]
})
export class HomeComponent implements OnInit {
  public title: string;
  public articles: Article[];
  public url:string;
  constructor(
    private _articleService: ArticleService
  ) {
    this.title='Recent posts';
  }
 
  ngOnInit(): void {
    this._articleService.getArticles(true).subscribe(
      response=>{
        if(response.articles){
          this.articles=response.articles;
          console.log(this.articles);
        }
      },
      error=>{ 
        console.log(error);
      }
    );
  }

}
