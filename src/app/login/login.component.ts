import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  nombre_correcto: string = "test"
  pass_correcto: string = "1234"

  submit(form, event) {
    let result = this.login(form.value.nombre, form.value.contrasena);
    if (result) {
      console.log("LOGEADO");
    } else {
      console.log("No VALIDO")
    }
  }

  login(nombre: string, contrasena: string): boolean {
    return nombre == this.nombre_correcto && contrasena == this.pass_correcto;
  }

  constructor() { }

  ngOnInit(): void {
    console.log("HOLa Mundo");
  }

}
