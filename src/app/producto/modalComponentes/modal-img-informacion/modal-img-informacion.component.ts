/**
 * @description modal ModalImgInformacionComponent para visualización de la imagen del libro seleccionado de la lista ListaComponent
 * @author Jhonatan David Mosquera
 * @date 30-01-2022
 */
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ServicioDatosService } from '../../services/servicio-datos.service';

@Component({
  selector: 'app-modal-img-informacion',
  templateUrl: './modal-img-informacion.component.html',
  styleUrls: ['./modal-img-informacion.component.scss']
})
export class ModalImgInformacionComponent implements OnInit {

  urlimg: any;
  tittle: any;
  bookdetail: any;


  constructor(public dialogRef: MatDialogRef<ModalImgInformacionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private serivicioDatos: ServicioDatosService) { 

      this.urlimg = this.data.image
      this.tittle = data['title'];
    }

  ngOnInit() {
    this.ObtenerDetallesLibros();
  }

  /**
     * @description realiza la petición al serivicio para obtener los detalles del libro por medio de un filtro
     * @author Jhonatan David Mosquera
     * @date 30-01-2022
     * @param
     * @returns void
     */
  ObtenerDetallesLibros(){
    try {
      let filtro = this.data['isbn13'];
    this.serivicioDatos.consultarInformacionLibros(filtro).subscribe((data: any) => {
      let datos = data;
      if(datos){
        this.bookdetail = datos;
      }
    });
    } catch (error) {
      console.log('error en componente ModalImgInformacionComponent' + error);
    }
  }

  


}
