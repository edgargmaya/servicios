import { Component } from '@angular/core';
import { ConsumoService } from '../../services/consumo.service';

import { Alumno } from '../../models/Alumno';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.css']
})
export class WorkSpaceComponent {

  alumnos: Array<Alumno>;
  onError: boolean = false;

  constructor( private $servicio : ConsumoService ){
  }

  getAlumnos(){
    this.$servicio.getService().subscribe(
      data => {
        console.log( data );
        this.alumnos = data;
      },
      err => {
        console.log( err );
        this.onError = true;
       }
    );
  }

  postAlumno(){
    let newAlumno : Alumno = {
      id: 3,
      name: "Pocho Lalo",
      primerApellido: "Dominguez",
      segundoApellido: "Gonzalez",
      calificacion: 8
    };
    this.$servicio.postService( newAlumno ).subscribe((data) => {
      console.log("Se añadio alumno", data );
      this.getAlumnos();
    }, err => {
      console.error( err );
    });
  }

  deleteAlumno(){
    this.$servicio.deleteService( 2 ).subscribe((data) => {
      console.log("Se eliminó alumno", data );
      this.getAlumnos();
    }, err => {
      console.error( err );
    });
  }

}
