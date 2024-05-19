import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Name2Component } from './name2.component';

describe('Name2Component', () => {
  let component: Name2Component;
  let fixture: ComponentFixture<Name2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Name2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Name2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
