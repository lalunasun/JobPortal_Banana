import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/app/service/job.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginObj:any =
  {
    "UserName": "",
    "Password": ""
  }
  onLogin(){
    this.jobSrv.login(this.loginObj).subscribe((res:any)=>{
      if (res.result){
        alert('User Logged in Success')
      } else{
        alert(res.message)
      }
    })
  }

  constructor(private jobSrv:JobService) { }

  ngOnInit() {
  }

}
