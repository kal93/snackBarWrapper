import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialSnackBarDemoComponent } from './material-snack-bar-demo.component';

describe('MaterialSnackBarDemoComponent', () => {
  let component: MaterialSnackBarDemoComponent;
  let fixture: ComponentFixture<MaterialSnackBarDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialSnackBarDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialSnackBarDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
