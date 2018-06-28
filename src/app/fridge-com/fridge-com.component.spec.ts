import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FridgeComComponent } from './fridge-com.component';

describe('FridgeComComponent', () => {
  let component: FridgeComComponent;
  let fixture: ComponentFixture<FridgeComComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FridgeComComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FridgeComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
