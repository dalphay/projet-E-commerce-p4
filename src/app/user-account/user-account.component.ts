import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { EComStoreApiService } from '../services/e-com-store-api.service';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.scss']
})
export class UserAccountComponent implements OnInit {

  constructor(private service:EComStoreApiService, private router : Router) { }
  email:string;
  password:string;
  ngOnInit() {
  }
  check(event){
    console.log(event);
    this.email = event.target.value
  }
  check2(event){
    this.password = event.target.value
                                                                                                                            
    console.log(event);
  }
  submit() {
    this.service.login({password:this.password,email:this.email}).subscribe(value =>{
      console.log(value);
      this.router.navigate(["user",value])
      //this.service.user = value;
      console.log(value);
      this.service.getById(value['userId']).subscribe(value => {
        console.log(value);
      });
    })
  }
}
