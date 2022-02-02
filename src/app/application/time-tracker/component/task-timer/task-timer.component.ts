import { Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { TimerService } from 'src/app/shared/service';
import { TimerModel } from '../../model';

@Component({
  selector: 'app-task-timer',
  templateUrl: './task-timer.component.html',
  styleUrls: ['./task-timer.component.scss']
})
export class TaskTimerComponent {

  projList: Array<string> = [];
  currentProj: string = '';
  taskName1: string = '';
  timer: number = 0;
  interval: any;

  @Output() stop = new EventEmitter<TimerModel>();

  constructor (
    private _timer: TimerService
  ) { }

  getList() {
    this.projList = this._timer.getProject();
  }

  setProj(proj: string) {
    this.currentProj = proj;
  }

  addTask(name: string) {
    this.taskName1 = name;
    this.interval = setInterval(() => {
      this.timer++;
    }, 1000);
  }

  endTask() {
    clearInterval(this.interval);
    this.interval = null;
    this.stop.emit({
      taskName: this.taskName1,
      endTime: this.timer
    });
  }

}
