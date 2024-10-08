import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-rules',
  templateUrl: './modal-rules.component.html',
  styleUrls: ['./modal-rules.component.scss']
})
export class ModalRulesComponent implements OnInit{
  isBasicGame:boolean=false;
  constructor(
    public dialogRef: MatDialogRef<ModalRulesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  ngOnInit() {
    this.isBasicGame=this.data.isBasicGame;
  }


  cerrarModal(){
    this.dialogRef.close();
  }
}
