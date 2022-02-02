import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { component } from './declaration';
import { BaseComponent } from './component';
import { MaterialModule, SharedModule } from '../shared';

const routes = [
  {
    path: '',
    component: BaseComponent,
    children: [
      {
        path: 'project',
        loadChildren: () => import('./project').then(_ => _.ProjectModule)
      },
      {
        path: 'time-tracker',
        loadChildren: () => import('./time-tracker').then(_ => _.TimeTrackerModule)
      },
      {
        path: '',
        redirectTo: '/project',
        pathMatch: 'full'
      },
    ]
  }
]

@NgModule({
  declarations: component,
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    SharedModule
  ]
})
export class ApplicationModule { }
