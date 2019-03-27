import { Component, OnInit } from '@angular/core';
import { FireDBService } from '../services/fire-db.service';

@Component({
  selector: 'app-tabs1',
  templateUrl: './tabs1.page.html',
  styleUrls: ['./tabs1.page.scss'],
})
export class Tabs1Page implements OnInit {

  

  constructor( public fireDB : FireDBService ) { }

  dispositivos(){
    console.log("muestra dispositivos");
    this.fireDB.titulo = "Dispositivos";
  }

  habitaciones(){
    console.log("muestra habitaciones");
    this.fireDB.titulo = "Habitaciones";
  }

  escenas(){
    console.log("muestra escenas");
    this.fireDB.titulo = "Escenas";
  }

  recientes(){
    console.log("muestra recientes");
    this.fireDB.titulo = "Recientes";
  }

  ngOnInit() {
  }

}
