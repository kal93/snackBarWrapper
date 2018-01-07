import { Component, OnInit } from '@angular/core';
import {MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-material-snack-bar',
  templateUrl: './material-snack-bar.component.html',
  styleUrls: ['./material-snack-bar.component.css']
})
export class MaterialSnackBarComponent implements OnInit {

  constructor(public snackBar: MatSnackBar ) {}

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000, // auto-dismisal timeout
      announcementMessage:"I'm leaving....",// for a11y
      // specifies postion horizntally
      horizontalPosition:'right',
      direction:'ltr', // text layout/script direction
      //
      // panelClass:// not available in beta12
      //specifies position vertically
      verticalPosition:'top',
      //
     //  viewContainerRef:this.snackBar,
    });
  }

  ngOnInit() {
    
  }
  

}
