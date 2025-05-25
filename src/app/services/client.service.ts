import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Client} from '../model/client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http:HttpClient) { }

  public getAllClients():Observable<Array<Client>> {
    return this.http.get<Array<Client>>(`http://localhost:8083/api/v1/client`);
  }

}
