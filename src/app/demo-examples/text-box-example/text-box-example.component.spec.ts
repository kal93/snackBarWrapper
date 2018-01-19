import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextBoxExampleComponent } from './text-box-example.component';

describe('TextBoxExampleComponent', () => {
  let component: TextBoxExampleComponent;
  let fixture: ComponentFixture<TextBoxExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextBoxExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextBoxExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
