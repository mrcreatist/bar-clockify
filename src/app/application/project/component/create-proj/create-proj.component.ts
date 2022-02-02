import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-proj',
  templateUrl: './create-proj.component.html',
  styleUrls: ['./create-proj.component.scss']
})
export class CreateProjComponent implements OnInit {

  constructor (
    public dialogRef: MatDialogRef<CreateProjComponent>,
  ) { }

  ngOnInit(): void {
  }

  add(name: string) {
    this.dialogRef.close(name);
  }

}
