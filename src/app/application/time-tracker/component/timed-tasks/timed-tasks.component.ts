import { Component, Input, OnInit } from '@angular/core';
import { TimerModel } from '../../model';

@Component({
  selector: 'app-timed-tasks',
  templateUrl: './timed-tasks.component.html',
  styleUrls: ['./timed-tasks.component.scss']
})
export class TimedTasksComponent implements OnInit {

  @Input() item: TimerModel = { taskName: '', endTime: 0 };

  constructor () { }

  ngOnInit(): void {
  }

}
