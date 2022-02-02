import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskTimerComponent } from './component/task-timer/task-timer.component';
import { TimedTasksComponent } from './component/timed-tasks/timed-tasks.component';
import { TimerLandingComponent } from './component/timer-landing/timer-landing.component';
import { RouterModule } from '@angular/router';
import { MaterialModule, SharedModule } from 'src/app/shared';

const routes = [
  {
    path: '',
    component: TimerLandingComponent
  }
]

@NgModule({
  declarations: [
    TaskTimerComponent,
    TimedTasksComponent,
    TimerLandingComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    SharedModule
  ]
})
export class TimeTrackerModule { }
