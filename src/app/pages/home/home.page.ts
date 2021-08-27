import { Component } from '@angular/core';
//Importar el componente de manejo formularios
import { FormControl,FormGroup } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  valor :String="Hola Mundo";
  //Permite crear objetos que se pueden utilizar en nuestra pagina TypeScript
  constructor() {}
    //Para definir una variable se ocupa 
    //nombre :Tipo="HolaMundo";
    //Pueden ser String, Boolean, Any , Array
    rut:String="20280074-2";
    nombreCompleto: String;
    edad:Number;
//Controles de formularios asociados a la etiqueta <ion-input>
// <ion-input [formControl]="elRut"> </ion-input>
persona = new FormGroup({
  elRut : new FormControl(''),
  elNombreCompleto : new FormControl(''),
  elEdad : new FormControl('')
})
//creacion de un metodo
grabar(){
  console.log(this.persona.value);
}
eliminar(){}

listar(){}

}
