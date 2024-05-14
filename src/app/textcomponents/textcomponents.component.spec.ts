import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextcomponentsComponent } from './textcomponents.component';

describe('TextcomponentsComponent', () => {
  let component: TextcomponentsComponent;
  let fixture: ComponentFixture<TextcomponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TextcomponentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TextcomponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
