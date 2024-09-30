import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../services/authentication.service";
import {jwtDecode} from "jwt-decode";
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-templete',
  templateUrl: './admin-templete.component.html',
  styleUrl: './admin-templete.component.css'
})
export class AdminTempleteComponent implements OnInit{
  token!: string;
  user!: string;
  constructor(protected auth: AuthenticationService,private  router:Router) {
  }

  ngOnInit():void  {
    if(!this.auth.isAuthenticated)
      this.router.navigateByUrl("/login")
  }

}
