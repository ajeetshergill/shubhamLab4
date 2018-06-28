import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeComComponent } from './recipe-com.component';

describe('RecipeComComponent', () => {
  let component: RecipeComComponent;
  let fixture: ComponentFixture<RecipeComComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeComComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
