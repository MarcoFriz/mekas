import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  user_pass: string = null;
  cookie: string = null;
  user_name: string = null;

  private _login_data$: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  public login_data$ = this._login_data$.asObservable();

  login(form: any): any {
    this.user_name = form.value.nombre;
    this.user_pass = form.value.contrasena;
    console.log("Envie la informacion");

    this.http
      .post<any>("http://localhost/server/login",
        { email: this.user_name, clave: this.user_pass },
        { headers: { 'Content-Type': 'text/plain' } })
      .subscribe(resultado => {
        if (!resultado) return;
        console.log("Recibí esto", resultado);
        this.cookie = resultado.msg;
        this._login_data$.next({ ...resultado });
        if (resultado.result == "Ok") {
          this.redireccionar("dashboard");
        }
      })
    return this.login_data$;
  }


  redireccionar(url: string): any {
    this.router.navigate([url])
  }

  constructor(private http: HttpClient, private router: Router) { }
}
