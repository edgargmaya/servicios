import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { Alumno } from '../models/Alumno';

@Injectable()
export class ConsumoService {

    constructor( private $http: HttpClient ){ }

    public getService(): Observable<any> {
        return this.$http.get("http://localhost:8089/angular/alumno" );
    }

    public postService( alumno : Alumno ){
        return this.$http.post("http://localhost:8089/angular/alumno", alumno );
    }

    public deleteService( id: number ){
        return this.$http.delete("http://localhost:8089/angular/alumno/" + id );
    }

}