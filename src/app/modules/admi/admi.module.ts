import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdmiRoutingModule } from './admi-routing.module';
import { AdminDashboardComponent } from './component/admin-dashboard/admin-dashboard.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AdminDashboardComponent

  ],
  imports: [
    CommonModule,
    AdmiRoutingModule,
    MatSidenavModule,
    MatCardModule,
    FormsModule
    
    
  ]
})
export class AdmiModule { }
