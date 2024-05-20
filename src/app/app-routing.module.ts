import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {LoginComponent} from "./login/login.component";
import {AdminTempleteComponent} from "./admin-templete/admin-templete.component";
import {DetailsOfferComponent} from "./details-offer/details-offer.component";
import {NewOfferComponent} from "./new-offer/new-offer.component";
import {UpdateOfferComponent} from "./update-offer/update-offer.component";
import {OffersComponent} from "./offers/offers.component";
import {LogoutComponent} from "./logout/logout.component";

const routes: Routes = [
  {path:"home",component: HomeComponent},
  {path:"dashboard",component: DashboardComponent},
  {path:"login",component: LoginComponent},
  {path:"admin",component: AdminTempleteComponent},
  {path:"detail-offer/:id",component: DetailsOfferComponent},
  {path:"update-offer",component: UpdateOfferComponent},
  {path:"new-offer",component: NewOfferComponent},
  {path:"offers",component:OffersComponent},
  {path:"logout",component: LogoutComponent},
  {path:"",redirectTo:"/home",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
