import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjListComponent } from './component/proj-list/proj-list.component';
import { CreateProjComponent } from './component/create-proj/create-proj.component';
import { RouterModule } from '@angular/router';
import { ProjLandingComponent } from './component/proj-landing/proj-landing.component';

const routes = [
  {
    path: '',
    component: ProjLandingComponent
  }
]

@NgModule({
  declarations: [
    ProjListComponent,
    CreateProjComponent,
    ProjLandingComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ProjectModule { }
