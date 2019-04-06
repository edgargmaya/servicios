import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class ConsumoService {

    constructor( private $http: HttpClient ){ }

    public getService(): Observable<any> {
        return this.$http.get("http://localhost:8089/angular/sample");
    }

}