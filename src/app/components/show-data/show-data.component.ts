import { Component, OnInit, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'show-data',
  templateUrl: './show-data.component.html',
  styleUrls: ['./show-data.component.scss']
})
export class ShowDataComponent implements OnInit {

  auxList: any[];
  constructor(public dialogRef: MatDialogRef<ShowDataComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any) { }


  

  ngOnInit() {
  }


  confirm() {
    console.log("ComponentPuta: ", this.data.maquinasfiltradas);
    this.dialogRef.close(this.auxList);
  }

}
