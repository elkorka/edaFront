import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {NavbarComponent} from '../navbar/navbar.component';
import {FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {AsyncPipe, JsonPipe, NgFor, NgIf} from '@angular/common';
import {ClientService} from '../services/client.service';
import {AuthService} from '../services/auth.service';
import {catchError, Observable, throttle, throwError} from 'rxjs';
import {Client} from '../model/client.model';
@Component({
  selector: 'app-clients',
  imports: [
    ReactiveFormsModule, NgIf, NgFor,  AsyncPipe
  ],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.css'
})
export class ClientsComponent {
  listesClient !: Observable<Array<Client>>;
  messageErreur:string | undefined;

  newClientFormGroup ! : FormGroup;

  constructor(private clientService : ClientService,public authService:AuthService,private fb:FormBuilder) {
  }

  ngOnInit(){
    this.listesClient=this.clientService.getAllClients().pipe(
      catchError(err => {
        this.messageErreur=err.message;
        return throwError(err);
      })
    );
    this.newClientFormGroup=this.fb.group({
      prenom : this.fb.control(""),
      nom : this.fb.control(""),
      email : this.fb.control(""),
      adresse : this.fb.control(""),
      telephone : this.fb.control("")
    });

  }

  handleAjouterClient() {
    let client:Client=this.newClientFormGroup.value;
    this.clientService.saveClient(client).subscribe({
      next:data=>{
        alert("Client ajouter avec succée");
      },
      error:err => {
        console.log(err);
      }

    });
  }
}
