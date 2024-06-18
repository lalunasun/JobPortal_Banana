import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/app/service/job.service';
import {Router } from '@angular/router';

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
  
  constructor(private jobSrv:JobService,private router:Router) { }

  onLogin(){
    this.jobSrv.login(this.loginObj).subscribe((res:any)=>{
      if (res.result){
        localStorage.setItem('jobLoginUser',JSON.stringify(res.data));
        this.router.navigateByUrl('/home');
        alert('User Logged in Success')
      } else{
        alert(res.message)
      }
    })
  }

 

  ngOnInit() {
  }

}
