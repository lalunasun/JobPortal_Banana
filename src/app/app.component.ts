import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'jobPortalApp';
  isLoggedIn:boolean=false;
  userInfo:any;

  constructor(){
    const UserData = localStorage.getItem('jobLoginUser');
    if(UserData == null){
      this.isLoggedIn = false;
    }else{
      this.isLoggedIn = true;
      this.userInfo = JSON.parse(UserData);
    }
  }
  logoff(){
    localStorage.removeItem('jobLoginUser');
    this.isLoggedIn = false;
  }
}
