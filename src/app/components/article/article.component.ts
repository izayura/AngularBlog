import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ArticleService } from '../../services/article.service';
import { Article } from '../../models/article';
import { Global } from '../../services/global';
import swal from 'sweetalert';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  providers: [ArticleService]
})
export class ArticleComponent implements OnInit {

  public article: Article;
  public url: string;

  constructor(
    private _articleService: ArticleService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { 
    this.url=Global.url;
  }

  ngOnInit(): void {
    this._route.params.subscribe(params=>{
      let id=params['id'];
      this._articleService.getArticle(id).subscribe(
        response=>{
          console.log(response);
          if(response.article){
            this.article=response.article;
          }else{
            this._router.navigate(['/home']);
          }
        },
        error=>{
          console.log(error);
          this._router.navigate(['/home']);
        }
      );
    }); 
  }

  delete(articleId){
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this article!",
      icon: "warning",
      buttons: [true, true],
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        swal("Article has been deleted!", {
          icon: "success",
        });
        this._articleService.delete(articleId).subscribe(
          params=>{
            console.log(params);
            this._router.navigate(['/blog']);
          },
          error=>{
            console.log(error);
          }
        );
      } else {
        swal("Article is safe!");
      }
    });
  }
}
