import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-proj-list',
  templateUrl: './proj-list.component.html',
  styleUrls: ['./proj-list.component.scss']
})
export class ProjListComponent implements OnInit {

  @Input() name: string = '';
  @Output() delete = new EventEmitter();

  constructor () { }

  ngOnInit(): void {
  }

  deleteFn() {
    this.delete.emit();
  }

}
