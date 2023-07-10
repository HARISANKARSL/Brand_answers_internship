import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmiModule } from './modules/admi/admi.module';
import { AuthGuard } from './shared/auth.guard';
import { CardsComponent } from './components/cards/cards.component';
import { TabsComponent } from './components/tabs/tabs.component';


const routes: Routes = [
  {path:'',
  redirectTo:'/login',pathMatch:'full'},
  {
path:'home',component:HomeComponent,canActivate:[AuthGuard]
  },

  {
    path:'signup',component:SignupComponent,
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:"card",component:CardsComponent
  },
  {
path:"tabs",component:TabsComponent
  },

  {path:"admin",loadChildren:()=> import ('./modules/admi/admi.module').then((m)=>m.AdmiModule)}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
