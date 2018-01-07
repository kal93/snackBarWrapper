import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';


import { AppComponent } from './app.component';
import { MaterialSnackBarComponent } from './lib/material-snack-bar/material-snack-bar.component';
import { MaterialSnackBarDemoComponent } from './demo-examples/material-snack-bar-demo/material-snack-bar-demo.component';

// angular material imports
import {  MatInputModule, MatSnackBarModule, MatFormFieldModule, MatButtonModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    
    MaterialSnackBarComponent,
    MaterialSnackBarDemoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
