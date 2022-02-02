import { Component, OnInit } from '@angular/core';
import { TimerModel } from '../../model';

@Component({
  selector: 'app-timer-landing',
  templateUrl: './timer-landing.component.html',
  styleUrls: ['./timer-landing.component.scss']
})
export class TimerLandingComponent implements OnInit {

  data: Array<TimerModel> = [];

  constructor () { }

  ngOnInit(): void {
  }

  stopHandler(item: TimerModel) {
    this.data.push(item);
  }

}
