import { Component, OnInit, ɵSWITCH_TEMPLATE_REF_FACTORY__POST_R3__ } from '@angular/core';
import { Article } from '../../models/article';
import { ArticleService } from '../../services/article.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Global } from '../../services/global';
import swal from 'sweetalert';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css'],
  providers: [ArticleService]
})
export class CreateArticleComponent implements OnInit {
  public article: Article;
  public status:string;
  public pageTitle: string;

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
    this.pageTitle='Create Article';
  }

  ngOnInit(): void {
    console.log(this.article);
  }

  onSubmit(){
    console.log(this.article);
    this._articleService.create(this.article).subscribe(
      response=>{
        if(response.status == 'Success'){
          this.status='Success';
          this.article=response.article;
          //Alerta
          swal(
            'Article created',
            'Article was created successfully',
            'success'
          ); 
          this._router.navigate(['/blog']);
        }else{
          this.status='Error'
        }
      },
      error=>{
        console.log(error);
        this.status='Error';
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
