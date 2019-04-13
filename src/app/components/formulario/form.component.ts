import { Component, EventEmitter, Output, Input } from '@angular/core';
import { NgForm, NgControl } from '@angular/forms';
import { Alumno } from '../../models/Alumno';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  @Input("alumnoNuevo")
  set setAlumno( event: Alumno ){
    console.log( event );
    this.alumno = event;
  }

  @Output()
  alumnoOutput: EventEmitter<Alumno> = new EventEmitter();

  alumno: Alumno = {
    name: "",
    primerApellido: "",
    segundoApellido: ""
  };

  onEnviar( obj ){
    if ( obj.valid ){
      this.alumnoOutput.emit( this.alumno );
    }
    console.log( this.alumno );    
  }

}
