import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFormPagnicacionComponent } from './modal-form-pagnicacion.component';

describe('ModalFormPagnicacionComponent', () => {
  let component: ModalFormPagnicacionComponent;
  let fixture: ComponentFixture<ModalFormPagnicacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalFormPagnicacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalFormPagnicacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
