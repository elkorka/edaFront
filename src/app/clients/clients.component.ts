import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {NavbarComponent} from '../navbar/navbar.component';
import {ReactiveFormsModule} from '@angular/forms';
import {AsyncPipe, JsonPipe, NgFor, NgIf} from '@angular/common';
import {ClientService} from '../services/client.service';
import {AuthService} from '../services/auth.service';
import {catchError, Observable, throttle, throwError} from 'rxjs';
import {Client} from '../model/client.model';
@Component({
  selector: 'app-clients',
  imports: [
    RouterOutlet, NavbarComponent,ReactiveFormsModule, NgIf, NgFor, JsonPipe, AsyncPipe
  ],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.css'
})
export class ClientsComponent {
  listesClient !: Observable<Array<Client>>;
  messageErreur:string | undefined;
    constructor(private clientService : ClientService,public authService:AuthService) {
  }

  ngOnInit(){
    this.listesClient=this.clientService.getAllClients().pipe(

      catchError(err => {
        this.messageErreur=err.message;
        return throwError(err);
      })

    );
  }

}
