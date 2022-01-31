/**
 * @description modal ModalFormPagnicacionComponent para la edición de la paginación de la lista ListaComponent
 * @author Jhonatan David Mosquera
 * @date 30-01-2022
 */
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

/**
     * @description asigna el valor digitado de la cantidad a la variable pagina para luego dar como 
     * salida al componente que llama al modal
     * @author Jhonatan David Mosquera
     * @date 30-01-2022
     * @param
     * @returns void
     */
  asignarPaginacion(){
    this.paginas = this.regularForm.value.pagin_cantidad;
    this.onNoClick();
  }

/**
     * @description ejecuta la accion del modal onNoClick para cerrar el modal
     * @author Jhonatan David Mosquera
     * @date 30-01-2022
     * @param
     * @returns void
     */
  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(){

  }

}
