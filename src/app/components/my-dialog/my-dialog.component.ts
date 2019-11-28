import { Component, OnInit, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'my-dialog',
  templateUrl: './my-dialog.component.html',
  styleUrls: ['./my-dialog.component.scss']
})
export class MyDialogComponent implements OnInit {

  auxList: any[];

  constructor(public dialogRef: MatDialogRef<MyDialogComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any) { }


  opList: number = 2;

  ngOnInit() {
  }
  confirm() {
    console.log("ComponentPuta: ",this.auxList);
    this.dialogRef.close(this.auxList);
  }

  cancel() {
    this.dialogRef.close(this.opList);
  }

}
