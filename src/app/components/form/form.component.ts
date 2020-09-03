import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public user: any;
  public field:string;
  public field2:string;

  constructor() {
    this.user={
      firstName:'',
      lastName:'',
      bio:'',
      gender:''
    }
  }

  ngOnInit(): void {
  }

  onSubmit(){
    alert('onSubmit');
    console.log(this.user);
  }

  clicked(){
    alert('You have clicked');
  }

  outInput(){
    alert('you are out the input');
  }

}
