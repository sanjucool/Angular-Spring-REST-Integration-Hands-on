import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { addEmployeeComponent } from './add-employee.component';

describe('RegistrationComponent', () => {
  let component: addEmployeeComponent;
  let fixture: ComponentFixture<addEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ addEmployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(addEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
