import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  gridApi: any;
  rowSelection: any;
  gridColumnApi: any;
  @Input() columnDefs: any;
  @Input() rowData: any;
  defaultColDef: any;
  rowGroupPanelShow: any;
  pivotPanelShow: any;
  @Input() paginacion: any;
  defaultColGroupDef: any;
  columnTypes: any;
  @Output() salidaLista: any;
  resultado: any;

  constructor() {
    this.paginacion = 10;
    this.defaultColDef = {
      width: 150,
      editable: false,
      filter: 'agTextColumnFilter',
      floatingFilter: true,
      resizable: true,
    };
    this.rowSelection = 'single';
    this.salidaLista = new EventEmitter();;
   }

  ngOnInit() {
  }

  onGridReady(params: any) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }

  onSelectionChanged() {
     const selectedRows = this.gridApi.getSelectedRows();
    this.resultado = selectedRows[0];
    this.emitirSalida();
  }

  emitirSalida(){
    this.salidaLista.next(this.resultado);
  }
}
