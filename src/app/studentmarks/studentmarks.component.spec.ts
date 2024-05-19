import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentmarksComponent } from './studentmarks.component';

describe('StudentmarksComponent', () => {
  let component: StudentmarksComponent;
  let fixture: ComponentFixture<StudentmarksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentmarksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentmarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
