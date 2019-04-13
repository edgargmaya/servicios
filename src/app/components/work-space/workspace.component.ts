import { Component } from '@angular/core';
import { ConsumoService } from '../../services/consumo.service';

import { Alumno } from '../../models/Alumno';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.css']
})
export class WorkSpaceComponent {

  alumnoId: number;
  alumnos: Array<Alumno>;

  alumnoFound: Alumno;

  onError: boolean = false;

  constructor( private $servicio : ConsumoService ){
    this.getAlumnos();
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

  postAlumno( alumno: Alumno){
    alumno.id = this.alumnos.length + 1;
    this.$servicio.postService( alumno ).subscribe( (data) => {
      console.log("Se añadio alumno", data );
      this.getAlumnos();
    }, err => {
      console.error( err );
    });
  }

  deleteAlumno(){
    this.$servicio.deleteService( 2 ).subscribe( (data) => {
      console.log("Se eliminó alumno", data );
      this.getAlumnos();
    }, err => {
      console.error( err );
    });
  }

  cargarAlumno(){
    let objTmp: any = this.alumnos.filter( (alumno) => alumno.id == this.alumnoId );
    if( objTmp.length > 0 )
      this.alumnoFound = objTmp[0];
  }

  recibirAlumno( alumno: Alumno){
    
    this.postAlumno( alumno );

    

  }

}
