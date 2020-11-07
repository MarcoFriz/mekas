import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-autos',
  templateUrl: './autos.component.html',
  styleUrls: ['./autos.component.css']
})
export class AutosComponent implements OnInit {
  lista_de_autos: any[] = [
    { id: 1, modelo: "spark", marca: "chevrolet", distancia: "10km", conductor_id: 2 },
    { id: 2, modelo: "600", marca: "fiat", distancia: "1km", conductor_id: 1 },
  ];
  lista_de_conductores: any[] = [
    { conductor_id: 1, nombre: "William", ano: "1988" },
    { conductor_id: 2, nombre: "Marisol", ano: "1988" },
    { conductor_id: 3, nombre: "Efrain", ano: "1988" },
  ];

  listado: any[];

  constructor() { }

  ngOnInit(): void {
    //vamos a hacer un join
    this.listado = this.lista_de_autos.map(auto => {
      let conductor = this.lista_de_conductores.find(item => item.conductor_id == auto.conductor_id)
      if (!conductor) return auto;
      auto = { ...auto, ano: "2020", conductor, ...conductor }
      return auto
    })
    console.log([...this.lista_de_autos, ...this.lista_de_conductores]);

  }

}
