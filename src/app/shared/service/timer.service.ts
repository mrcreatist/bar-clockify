import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimerService {

  projList: Array<string> = [];

  constructor () { }

  addProject(item: string) {
    this.projList.push(item);
    this.addToLocal();
  }
  deleteProject(index: number) {
    this.projList.splice(index, 1);
    this.addToLocal();
  }
  getProject() {
    return JSON.parse(this.fromLocal());
  }

  addToLocal() {
    localStorage.setItem('project', JSON.stringify(this.projList));
  }
  fromLocal() {
    return localStorage.getItem('project') || '';
  }

}
