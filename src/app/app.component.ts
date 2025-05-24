import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AuthService} from './services/auth.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private authService:AuthService) {
  }
  title = 'frontend';

  ngOnInit(){
    this.authService.loadJwtTokenFromLocalStorage();
  }
}
