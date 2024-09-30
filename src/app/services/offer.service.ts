import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthenticationService} from "./authentication.service";
import {Observable} from "rxjs";
import {JobOffer, TechSkillOffer} from "../models/jobOffer";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class OfferService {
  hostQuery:string = "http://localhost:8087/query";
  hostCommand: string= "http://localhost:8087/command/offers";
  jobOffers!:JobOffer;

  constructor(private  http: HttpClient,private authService: AuthenticationService) {


  }

  getAllJobOffers(): Observable<JobOffer[]> {
    return  this.http.get<Array<JobOffer>>(`${environment.backendHost}/query/offers/all`);
  }



  getJobOfferById(id:string): Observable<JobOffer> {
    return  this.http.get<JobOffer>(this.hostQuery+"/offers/all/"+id);
  }

  updateJobOff(job: JobOffer): Observable<any>{
    return  this.http.put(this.hostCommand+"/updateOffer",job);

  }

  addNewJobOffer(offer: JobOffer): Observable<any>{
    return this.http.post(this.hostCommand+"/addOffer",offer)

  }

  getOneTechnology(id:number): Observable<any>{
    return  this.http.get(this.hostQuery+"/technologies/"+id)

  }

  getAllTechnologies(): Observable<TechSkillOffer[]>{
    return  this.http.get<Array<TechSkillOffer>>(this.hostQuery+"/technologies/all");
  }

  getOneDegree(id:number): Observable<any>{
    return  this.http.get<any>(this.hostQuery+"/degrees/"+id);
  }

  getAllDegrees(): Observable<any>{
    return  this.http.get<Array<any>>(this.hostQuery+"/degrees/all");
  }


}
