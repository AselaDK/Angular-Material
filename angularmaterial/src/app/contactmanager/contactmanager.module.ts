import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactmanagerAppComponent } from './contactmanager-app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { Routes, RouterModule } from "@angular/router";

import { MaterialModule } from "../shared/material/material.module";
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatListModule } from "@angular/material/list";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule } from '@angular/material/icon';
import { UserService } from './service/user.service';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';

const routes: Routes = [
  { path:'', component: ContactmanagerAppComponent,
    children: [
      { path: ':id', component: MainContentComponent},
      { path: '', component: MainContentComponent}
    ]
  },
  { path:'**', redirectTo:'' }
];

const ModuleComponent = [
  CommonModule,
  HttpClientModule,
  MaterialModule,
  FormsModule,
  FlexLayoutModule,
  RouterModule.forChild(routes),
  MatListModule,
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatCardModule,
  MatTabsModule
]

@NgModule({
  declarations: [ContactmanagerAppComponent, ToolbarComponent, MainContentComponent, SidenavComponent],
  imports: [ModuleComponent],
  exports: [ModuleComponent],
  providers: [UserService]
})
export class ContactmanagerModule { }
