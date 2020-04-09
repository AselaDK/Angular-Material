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

const routes: Routes = [
  { path:'', component: ContactmanagerAppComponent,
    children: [
      { path: '', component: MainContentComponent}
    ]
  },
  { path:'**', redirectTo:'' }
];

const ModuleComponent = [
  CommonModule,
  MaterialModule,
  FormsModule,
  FlexLayoutModule,
  RouterModule.forChild(routes),
  MatListModule,
  MatToolbarModule,
  MatSidenavModule
]

@NgModule({
  declarations: [ContactmanagerAppComponent, ToolbarComponent, MainContentComponent, SidenavComponent],
  imports: [ModuleComponent],
  exports: [ModuleComponent]
})
export class ContactmanagerModule { }
