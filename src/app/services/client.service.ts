import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Client} from '../model/client.model';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http:HttpClient) { }

  public getAllClients():Observable<Array<Client>> {
    return this.http.get<Array<Client>>(environment.backendHost);
  }
  public saveClient(client : Client):Observable<Client> {
    return this.http.post<Client>(environment.backendHost,client);
  }

}
