import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {NgFor, NgIf} from '@angular/common';

@Component({
  selector: 'app-clients',
  imports: [
     ReactiveFormsModule,NgIf,NgFor
  ],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.css'
})
export class ClientsComponent {
  listesClient: any;
  constructor(private http: HttpClient) {
  }

  ngOnInit(){
    this.http.get("http://localhost:8083/api/v1/client").subscribe( {
      next : ( data)=>{
          this.listesClient=data;
        },
      error : (err) => {
          console.log(err)
        }
  });
  }

}
