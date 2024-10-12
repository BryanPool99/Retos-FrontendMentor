import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalRulesComponent } from './modal-rules/modal-rules.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent {
  @Input() isBasicGame: boolean = false;

  constructor(public dialog: MatDialog){}

  verReglas() {
    const isMobile = window.innerWidth <= 500;
    const dialogRef = this.dialog.open(ModalRulesComponent,{
      width: isMobile ? '100vw' : '400px',
      height: isMobile ? '100vh' : 'auto',
      panelClass: 'custom-dialog', // Añade tu clase personalizada
      disableClose: true,
      data:{
        isBasicGame:this.isBasicGame
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
