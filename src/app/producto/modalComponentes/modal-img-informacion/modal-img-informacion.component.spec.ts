import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalImgInformacionComponent } from './modal-img-informacion.component';

describe('ModalImgInformacionComponent', () => {
  let component: ModalImgInformacionComponent;
  let fixture: ComponentFixture<ModalImgInformacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalImgInformacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalImgInformacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
