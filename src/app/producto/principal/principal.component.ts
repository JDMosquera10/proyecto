import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ColDef } from 'ag-grid-community';
import { ServicioDatosService } from '../services/servicio-datos.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ModalFormPagnicacionComponent } from '../modalComponentes/modal-form-pagnicacion/modal-form-pagnicacion.component';
import { ModalImgInformacionComponent } from '../modalComponentes/modal-img-informacion/modal-img-informacion.component';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})


export class PrincipalComponent implements OnInit {
  

  rowList: any;
  columnsList: any;
  regularForm: FormGroup;
  paginationList: any;
  component: any;
  libroselect: any;
  stateselect: boolean;

  constructor(private serivicioDatos: ServicioDatosService, private fb: FormBuilder, public dialog: MatDialog) { 
    this.regularForm = this.fb.group({
      prin_nombre:['','']
    })

    this.stateselect = false;
    this.rowList = [];
    this.columnsList = [
      { headerName:'Tittle', field: "title", sortable: true,},
      { headerName:'Subittle', field: "subtitle" },
      { headerName:'Isbn13', field: "isbn13" },
      { headerName:'Price', field: "price", sortable: true },
      { headerName:'Url', field: "url" }
    ];

      this.paginationList = 10;
  }

  ngOnInit() {

  }

  cargarDatosConsulta(){
    try {
      let filtro = this.regularForm.value.prin_nombre;
    this.serivicioDatos.consultarDatosLibros(filtro).subscribe((data: any) => {
      let datos = data;
      if(datos){
        this.rowList = datos['books'];
      }
    });
    } catch (error) {
      console.log('error en componente PrincipalComponent' + error);
    }
  }

  cambioPaginacion(option:any){
    try {
      let datos;
      let widthsend;
      if(option === "pag"){
        this.component = ModalFormPagnicacionComponent;
        widthsend = '350px';
      }else if(option === "info"){
        this.component =  ModalImgInformacionComponent;
        if(this.stateselect){
          datos = this.libroselect;
          widthsend = '750px';
        }else{
          
        }
      }
      // '250px'
        const dialogRef = this.dialog.open(this.component, {
          width: widthsend,
          data: datos,
        });
    
        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
          this.paginationList = result;
          this.cargarDatosConsulta();
        });
    } catch (error) {
      console.log('error en componente PrincipalComponent' + error);
    }
  }

  asignarLibro(libro: any){
    this.stateselect = true;
    this.libroselect = libro;
  }

}
