import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-form-pagnicacion',
  templateUrl: './modal-form-pagnicacion.component.html',
  styleUrls: ['./modal-form-pagnicacion.component.scss']
})
export class ModalFormPagnicacionComponent implements OnInit {



  regularForm: FormGroup;
  paginas: any;

  constructor(private fb: FormBuilder,  public dialogRef: MatDialogRef<ModalFormPagnicacionComponent>) { 
    this.regularForm = this.fb.group({
      pagin_cantidad:['','']
    })
  }

  asignarPaginacion(){
    this.paginas = this.regularForm.value.pagin_cantidad;
    this.onNoClick();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(){

  }

}
