import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './producto/principal/principal.component';
import { ListaComponent } from './producto/lista/lista.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { AgGridAngular } from 'ag-grid-angular';
import { MatSliderModule } from '@angular/material/slider';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { ModalFormPagnicacionComponent } from './producto/modalComponentes/modal-form-pagnicacion/modal-form-pagnicacion.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ModalImgInformacionComponent } from './producto/modalComponentes/modal-img-informacion/modal-img-informacion.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    ListaComponent,
    ModalFormPagnicacionComponent,
    ModalImgInformacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxDatatableModule,
    MatSliderModule,
    MatInputModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    AgGridModule.withComponents([]),
    BrowserAnimationsModule
  ],
  providers: [ 
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
