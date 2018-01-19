import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-text-box',
  templateUrl: './text-box.component.html',
  styleUrls: ['./text-box.component.css']
})
export class TextBoxComponent implements OnInit {

  @Input() name: any;


  constructor() { }

  ngOnInit() {
  }

  // switchIcons is a getter method which returns an object which contains the fa icons.
  get switchIcons() {
    const cssClasses = { 'name' : true };
    if (this.name) {
      cssClasses[this.name] = true;
    }
return cssClasses;
  }

}
