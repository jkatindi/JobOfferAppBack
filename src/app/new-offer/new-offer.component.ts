import {Component, ElementRef, ViewChild} from '@angular/core';
import {AuthenticationService} from "../services/authentication.service";
import {Router} from "@angular/router";
import {DegreeOffer, InfoGeneral, JobOffer, TechSkillOffer} from "../models/jobOffer";
import {OfferService} from "../services/offer.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {COMMA, ENTER} from "@angular/cdk/keycodes";
import {map, Observable, startWith} from "rxjs";
import {MatAutocomplete, MatAutocompleteSelectedEvent} from "@angular/material/autocomplete";
import {MatChipInputEvent} from "@angular/material/chips";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-new-offer',
  templateUrl: './new-offer.component.html',
  styleUrl: './new-offer.component.css',

})
export class NewOfferComponent {
  offer!: JobOffer;
  selectable=true;
  visible=true;
  isLinear = true;
  removable=true;
  separatorKeysCodes: number[] = [ENTER,COMMA];
  addOnBlur=true;
  responseServer!:any;
  titleForm!: FormGroup;
  companyForm!: FormGroup;
  techsForm!: FormGroup;
  selectItem: number[]=[];
  degrees$!: Observable<DegreeOffer[]>;
  techSkills: any[]=[];
  technologies!: any[];
  techs$!: Observable<TechSkillOffer[]>;
  filteredTechs$!: Observable<TechSkillOffer[]>;
  tableau: string []=["Java","C","C++","Angular","Docker"];
  @ViewChild('techInput') techInput!: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete!: MatAutocomplete;

  constructor(private authService:AuthenticationService,private serviceOffer: OfferService,private  router: Router,
              private formBuilder:FormBuilder) {
  }
  ngOnInit(){
    this.degrees$=this.serviceOffer.getAllDegrees();
    this.serviceOffer.getAllTechnologies().subscribe((data)=>{
      this.technologies=data;
    })
    for(let i=1;i<20;i++){ this.selectItem.push(i)}

    this.titleForm = this.formBuilder.group({
      title: ['',Validators.required],
      positionHeld: ['',Validators.required],
      availablePlace: [null,Validators.required]
    });
    this.companyForm=this.formBuilder.group({
      localisation: ['',Validators.required],
      companyDescription: ['',Validators.required],
      companyName: ['',Validators.required]
    })

    this.techsForm= this.formBuilder.group({
      generalProfil:  ['',Validators.required],
      requiredTechs: [null,Validators.required],
      requiredDegrees: [null,Validators.required],
      experMin: [null,Validators.required]
    });

    this.filteredTechs$=this.serviceOffer.getAllTechnologies();

  }

  private _filter(tech: TechSkillOffer): TechSkillOffer[] {
    const valFilter=tech.technology.toLowerCase();
    return this.technologies.filter(tech => tech.technology.toLowerCase().indexOf(valFilter)===0);

  }

  addNewOffer(){
    this.initializeData()
    alert(JSON.stringify(this.offer))
    this.serviceOffer.addNewJobOffer(this.offer)
      .subscribe({next:(data)=>{
          this.responseServer="Success added "
        },
        error:(error)=>{
          this.responseServer=error.message;
        }
      })
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    let techSkill={
      id: event.option.value['id'],
      technology: event.option.value['technology']
    };

    let found=this.techSkills.map(value=>value.technology)
      .includes(techSkill.technology)
    if(!found) this.techSkills.push(techSkill);

    this.techInput.nativeElement.value = '';
    //this.techsForm.controls['requiredTechs'].setValue(this.techSkills);

  }
  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;
    if ((value || ''))
      this.techSkills.push(value);
    if(input){
      input.value='';

    }
    this.techsForm.controls['requiredTechs'].setValue(this.techSkills);
  }

  remove(tech: TechSkillOffer): void{
    const  index=this.techSkills.indexOf(tech);
    if(index>=0){
      this.techSkills.splice(index,1);
    }
  }


  initializeData(){
    this.offer.title=this.titleForm.controls['title'].value;
    let genInfo=new InfoGeneral();
    genInfo.companyName=this.companyForm.controls['companyName'].value;
    genInfo.companyDescription=this.companyForm.controls['companyDescription'].value;
    genInfo.localisation=this.companyForm.controls['localisation'].value;
    this.offer.generalInfo=genInfo;
    this.offer.positionHeld=this.titleForm.controls['positionHeld'].value;
    this.offer.generalProfile=this.techsForm.controls['generalProfil'].value;
    this.offer.requiredTechs=this.techSkills;
    this.offer.requiredDegrees=this.techsForm.controls['requiredDegrees'].value;
    this.offer.experMin=this.techsForm.controls['experMin'].value;
    this.offer.availablePlace=this.titleForm.controls['availablePlace'].value;
    this.offer.requiredTechs=this.techSkills;
  }
}
