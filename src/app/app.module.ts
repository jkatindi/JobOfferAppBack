import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminTempleteComponent } from './admin-templete/admin-templete.component';
import {MatToolbar, MatToolbarModule} from "@angular/material/toolbar";
import {MatButton, MatButtonModule} from "@angular/material/button";
import {MatIcon, MatIconModule} from "@angular/material/icon";
import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatDrawer, MatDrawerContainer, MatSidenavModule} from "@angular/material/sidenav";
import {MatNavList} from "@angular/material/list";
import { OffersComponent } from './offers/offers.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { DetailsOfferComponent } from './details-offer/details-offer.component';
import { NewOfferComponent } from './new-offer/new-offer.component';
import { UpdateOfferComponent } from './update-offer/update-offer.component';
import {MatCard, MatCardContent, MatCardHeader, MatCardModule, MatCardTitle} from "@angular/material/card";
import {MatDivider} from "@angular/material/divider";
import {OfferService} from "./services/offer.service";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {MatFormField, MatFormFieldModule} from "@angular/material/form-field";
import {MatInput, MatInputModule} from "@angular/material/input";
import {RequestInterceptorService} from "./services/request-interceptor.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatTable, MatTableModule} from "@angular/material/table";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatPaginator, MatPaginatorModule} from "@angular/material/paginator";
import { LogoutComponent } from './logout/logout.component';
import { WelcomComponent } from './welcom/welcom.component';
import {MatStepper, MatStepperModule} from "@angular/material/stepper";
import {MAT_CHIPS_DEFAULT_OPTIONS, MatChipsModule} from "@angular/material/chips";
import {COMMA,ENTER} from "@angular/cdk/keycodes";
import {MatOption, MatSelect} from "@angular/material/select";
import {MatAutocomplete, MatAutocompleteTrigger} from "@angular/material/autocomplete";
import {STEPPER_GLOBAL_OPTIONS} from "@angular/cdk/stepper";

@NgModule({
  declarations: [
    AppComponent,
    AdminTempleteComponent,
    OffersComponent,
    LoginComponent,
    DashboardComponent,
    HomeComponent,
    DetailsOfferComponent,
    NewOfferComponent,
    UpdateOfferComponent,
    LogoutComponent,
    WelcomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenu,
    MatMenuItem,
    MatMenuTrigger,
    MatSlideToggleModule,
    BrowserAnimationsModule,
    MatDrawer,
    MatSidenavModule,
    MatNavList,
    MatDivider,
    MatCardModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInput,
    MatInputModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatStepper, FormsModule,
    MatChipsModule,
    ReactiveFormsModule,
    MatStepperModule, MatSelect, MatOption, MatAutocomplete, MatAutocompleteTrigger
  ],exports: [
      MatInputModule
  ],
  providers: [OfferService,
    {provide: HTTP_INTERCEPTORS,useClass: RequestInterceptorService,multi:true },
    {provide: MAT_CHIPS_DEFAULT_OPTIONS, useValue: { separatorKeyCodes:[ENTER,COMMA]  },},
    {provide: STEPPER_GLOBAL_OPTIONS, useValue : {showError: true}
  }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
