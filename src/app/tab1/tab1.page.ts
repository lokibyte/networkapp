import { Component } from '@angular/core';
import { NetworkService } from '../network.service';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public network:NetworkService) {}
  error:any;
  res:any;
  doPost(){
    let reqobj = {
      loginType:'',
      username:''
    };
    let url="";
    this.network.httpPost(url,reqobj).subscribe(
      (data)=>{
        this.res = data;
        console.info("data",data);
      },
      (error)=>{
        this.error = error;
        console.info("error",error);
      },
    )
  } 
  capdoPost(){
    this.network.post();
  }
}
