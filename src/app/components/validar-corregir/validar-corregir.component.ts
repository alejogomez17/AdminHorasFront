import { Component, OnInit } from '@angular/core';
import { Ingreso } from '../../modelos/Ingreso';
import { Conflicto } from '../../modelos/Conflicto';;
import { ServicioAdministradorHorasService } from '../../services/servicio-administrador-horas.service';
import { Peticion } from 'src/app/modelos/Peticion';

@Component({
  selector: 'app-validar-corregir',
  templateUrl: './validar-corregir.component.html',
  styleUrls: ['./validar-corregir.component.css']
})
export class ValidarCorregirComponent implements OnInit {

  private ingresos: Ingreso[];
  private conflictos : Conflicto[];
  public ingresoSeleccionado: Ingreso;
  public cols: any[];
  public colsConflictos : any[];
  constructor(public _servicioAdministradorHoras: ServicioAdministradorHorasService) {
  }

  ngOnInit() {
    this.cols = [
      { field: 'descripcion', header: 'Descripción' },
      { field: 'fechaIngreso', header: 'Fecha de Ingreso' },
      { field: 'estado', header: 'Estado' }];
    this.colsConflictos = [
      { field: 'descripcion', header:'Descripción'},
      { field: 'estado', header:'Estado'}];
    this.ingresos = new Array();
    this.conflictos = new Array();
    this.cargarIngresos();
    this.cols.push({"paco":""})

  }

  cargarIngresos() {
    this._servicioAdministradorHoras.getIngresosArchivo("obtenerIngresosArchivo").subscribe(
      result => {
        console.log(result);
        this.ingresos = result;
      },
      error => {
        console.log(<any>error);
      }
    );
  }



  onRowSelect(event) {
    console.log('evento: ' + event);
    this.obtenerConflictosDeRegistrosPorIngresoSeleccionado(this.ingresoSeleccionado.id);
  }

  onRowUnselect(event) {
    console.log('evento: ' + event);
  }

  obtenerConflictosDeRegistrosPorIngresoSeleccionado(idingreso) {
    
    let parametros = new Peticion();
    parametros.ingresoArchivo = idingreso;
    this._servicioAdministradorHoras.postPeticion("conflictosRegistros", parametros).subscribe(
      result => {
        console.log(result);
        this.conflictos = result;
      },
      error => {
        console.log('error...');
        console.log(<any>error);
      }
    );
  }


}
