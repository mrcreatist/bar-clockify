import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TimerService } from 'src/app/shared/service';
import { CreateProjComponent } from '..';

@Component({
  selector: 'app-proj-landing',
  templateUrl: './proj-landing.component.html',
  styleUrls: ['./proj-landing.component.scss']
})
export class ProjLandingComponent implements OnInit {

  constructor (
    public dialog: MatDialog,
    private _timer: TimerService
  ) { }

  ngOnInit(): void {
  }

  addProject() {
    this.dialog.open(CreateProjComponent).afterClosed().subscribe((res: string) => {
      this._timer.addProject(res);
    });
  }

  getProjectList() {
    return this._timer.getProject();
  }

  deleteHandler(index: number) {
    this._timer.deleteProject(index);
  }

}
