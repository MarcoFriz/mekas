import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  nombre_correcto: string = "test"
  pass_correcto: string = "1234"

  mensajes: string = null;

  submit(form, event) {
    this.service.login(form).subscribe(data => {
      if (!data) return;
      if (data.result == "Ok") {
        this.mensajes = `Bienvenido ${data.data[0].nombre}`;
      }
    })
  }

  constructor(public service: AppService) { }

  ngOnInit(): void {
    // this.service.login_data$.subscribe()
  }

}
