import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../services/authentication.service";
import {jwtDecode} from "jwt-decode";

@Component({
  selector: 'app-admin-templete',
  templateUrl: './admin-templete.component.html',
  styleUrl: './admin-templete.component.css'
})
export class AdminTempleteComponent implements OnInit{
  token!: string;
  user!: string;
  constructor(protected auth: AuthenticationService) {
  }

  ngOnInit():void  {


  }


}
