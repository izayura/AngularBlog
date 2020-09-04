import { Component, OnInit } from '@angular/core';
import { Article } from '../../models/article';
import { ArticleService } from '../../services/article.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Global } from '../../services/global';
import swal from 'sweetalert';

@Component({
  selector: 'app-edit-article',
  templateUrl: '../create-article/create-article.component.html',
  styleUrls: ['./edit-article.component.css'],
  providers: [ArticleService]
})
export class EditArticleComponent implements OnInit {

  public article: Article;
  public status:string;
  public pageTitle: string;
  public url: string;

  afuConfig = {
    multiple: false,
    formatsAllowed: ".jpg,.png,.gif,.jpeg",
    maxSize: "50",
    uploadAPI:  {
      url: Global.url+'/upload-image'
      },
    theme: 'attachPin',
    hideProgressBar: true,
    hideResetBtn: true,
    hideSelectBtn: false,
    replaceTexts: {
      selectFileBtn: 'Select Files',
      resetBtn: 'Reset',
      uploadBtn: 'Upload',
      dragNDropBox: 'Drag N Drop',
      attachPinBtn: 'Upload Image',
      afterUploadMsg_success: 'Successfully Uploaded !',
      afterUploadMsg_error: 'Upload Failed !',
      sizeLimit: 'Size Limit'
    }
  }

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _articleService:ArticleService
  ) { 
    this.article=new Article('','','',null, null);
    this.url=Global.url;
    this.pageTitle='Edit Article';
  }

  ngOnInit(): void {
    console.log(this.article);
    this.getArticle();
  }

  getArticle(){
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
  onSubmit(){
    console.log(this.article);
    this._articleService.update(this.article._id, this.article).subscribe(
      response=>{
        if(response.status == 'Success'){
          this.status='Success';
          this.article=response.article;
          swal(
            'Article edited',
            'Article was edited successfully',
            'success'
          ); 
          this._router.navigate(['/blog/article/'+this.article._id]);
        }else{
          this.status='Error'
        }
      },
      error=>{
        console.log(error);
        this.status='Error';
        swal(
          'Failed edition',
          'Article was not edited',
          'error'
        ); 
      }
    )
  }

  imageUpload(data){
    console.log(data);
    let image_data= data.body;
    console.log(image_data.image);
    this.article.image=image_data.image;
  }
}
