import { Component } from '@angular/core';
import { ConsumoService } from '../../services/consumo.service';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.css']
})
export class WorkSpaceComponent {

  json: any;

  constructor( private $servicio : ConsumoService ){
    this.getServices();
  }

  getServices(){

    this.$servicio.getService().subscribe(
      data => {
        console.log( data );
        this.json = data;
      },
      err => {
        console.log( err );
        this.json = err.error.timestamp + " Hola ";
       }
    );

  }

}
