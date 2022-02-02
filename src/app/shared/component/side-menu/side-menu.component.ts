import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  menu = [
    {
      name: 'Timer',
      path: '/time-tracker'
    },
    {
      name: 'Project',
      path: '/project'
    }
  ]

  constructor (
    private _router: Router
  ) { }

  ngOnInit(): void {
  }

  goToRoute(route: string) {
    this._router.navigateByUrl(route);
  }

}
