import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class FireDBService {

  dispositivos:any[]=[];
  habitaciones:any[]=[];
  escenas:any[]=[];

  config = {
    apiKey: "AIzaSyAbi-euPz0_Q_Jdef-6_G6S_-moX2-2tWM",
    authDomain: "banco-1-antwort.firebaseapp.com",
    databaseURL: "https://banco-1-antwort.firebaseio.com",
    projectId: "banco-1-antwort",
    storageBucket: "banco-1-antwort.appspot.com",
    messagingSenderId: "971341645034"
  };
  

  nombreUsuario = "David";
  nombreSistema = "Casa Bogotá";
  titulo = 'Recientes';

  constructor() { 
    firebase.initializeApp(this.config);
    this.leerDispositivos();
    this.leerHabitaciones();
    this.leerEscenas();
  }

  leerDispositivos(){
    firebase.database().ref('/dispositivos').orderByChild('tipo').on('value', (snap)=>{
      this.dispositivos = [];
      snap.forEach(element => {
        this.dispositivos.push(element.val());
      });
      console.log("Dispositivos: ", this.dispositivos);
    });
  }

  leerHabitaciones(){
    firebase.database().ref('/habitaciones').orderByChild('nombre').on('value', (snap)=>{
      this.habitaciones = [];
      snap.forEach(element => {
        this.habitaciones.push(element.val());
      });
      console.log("Habitaciones: ", this.habitaciones);
    });
  }

  leerEscenas(){
    firebase.database().ref('/escenas').orderByChild('nombre').on('value', (snap)=>{
      this.escenas = [];
      snap.forEach(element => {
        this.escenas.push(element.val());
      });
      console.log("Escenas: ", this.escenas);
    });
  }

}

