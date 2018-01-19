import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';


import { AppComponent } from './app.component';
import { MaterialSnackBarComponent } from './lib/material-snack-bar/material-snack-bar.component';
import { MaterialSnackBarDemoComponent } from './demo-examples/material-snack-bar-demo/material-snack-bar-demo.component';

// angular material imports
import {  MatInputModule, MatSnackBarModule, MatFormFieldModule, MatButtonModule} from '@angular/material';
import { TextBoxComponent } from './lib/text-box/text-box.component';

// font awesome
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AngularFontAwesomeComponent } from 'angular-font-awesome/dist/src/component/angular-font-awesome.component';
import { TextBoxExampleComponent } from './demo-examples/text-box-example/text-box-example.component';

@NgModule({
  declarations: [
    AppComponent,

    MaterialSnackBarComponent,
    MaterialSnackBarDemoComponent,
    TextBoxComponent,
    TextBoxExampleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
