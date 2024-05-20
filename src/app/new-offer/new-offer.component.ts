import { Component } from '@angular/core';
import {AuthenticationService} from "../services/authentication.service";
import {Router} from "@angular/router";
import {JobOffer} from "../models/jobOffer";
import {OfferService} from "../services/offer.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {COMMA, ENTER} from "@angular/cdk/keycodes";

@Component({
  selector: 'app-new-offer',
  templateUrl: './new-offer.component.html',
  styleUrl: './new-offer.component.css'
})
export class NewOfferComponent {
  jobOffer!: JobOffer;
  selectable=true;
  visible=true;
  isLinear = true;
  removable=true;
  separatorKeysCodes: number[] = [ENTER,COMMA];
  addOnBlur=true;
  responseServer!:any;
  titleForm!: FormGroup;
  companyForm!: FormGroup;
  experienceForm!: FormGroup;
  techsForm!: FormGroup;
  selectItem: number[]=[];
  constructor(private authService:AuthenticationService,private ServiceOffer: OfferService,private  router: Router,
              private fb:FormBuilder) {
  }
  ngOnInit(){
    for(let i=1;i<20;i++){ this.selectItem.push(i)}

    this.titleForm=this.fb.group({
      title: this.fb.control(""),
      positionHeld: this.fb.control(""),
      availablePlace: this.fb.control("")
    });

    this.companyForm=this.fb.group({
      localisation: this.fb.control(""),
      companyDescription: this.fb.control(""),
      companyName: this.fb.control("")
    })

    this.techsForm=this.fb.group({
      localisation: this.fb.control(""),
      companyDescription: this.fb.control(""),
      companyName: this.fb.control("")
    })
  }
  addNewOffer(){
    this.ServiceOffer.addNewJobOffer(this.jobOffer)
      .subscribe({
        next:value => {
           this.responseServer="Success add  new job offer"
           this.jobOffer=value;
        },
        error:err =>{ this.responseServer=err.message} })
  }

}
