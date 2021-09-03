import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ejemplo1',
  templateUrl: './ejemplo1.page.html',
  styleUrls: ['./ejemplo1.page.scss'],
})
export class Ejemplo1Page implements OnInit {

  constructor(private router:Router, private alertController: AlertController) { }

  ngOnInit() {
    this.listar();
  }
  //mensaje de alerta para editar
  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
  //mensaje de alerta para eliminar
  async presentAlertConfirm(rut:String) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm!',
      message: 'Desea eliminar registro <strong>'+rut+'</strong>!!!',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Aceptar',
          handler: () => {
            console.log('Confirm Okay');
            this.eliminar(rut);
          }
        }
      ]
    });

    await alert.present();
  }
  lista_persona=[
    {
      rut: 1,
      nombre: "juan",
      edad: 33
    },
    {
      rut: 2,
      nombre: "carlo",
      edad: 45
    },
    {
      rut: 3,
      nombre: "penelope",
      edad: 12
    }
  ];
  //metodos
  eliminar(rut:String){
    alert('selecciono eliminar' + rut);
    var datos= localStorage.getItem('misdatos');
    datos = datos.replace('[','');
    datos = datos.replace(']','');
    datos = datos.split('},{').join('};{');
   // alert(datos);
    var lista_temporal= new Array();
    var per;
    var arreglo_temp= datos.split(";");
    for (let index = 0; index < arreglo_temp.length; index++) {    
      var registro = arreglo_temp[index];
      var la_persona = JSON.parse(registro);
      per={
        rut: la_persona.rut,
        nombre: la_persona.nombre,
        edad: la_persona.edad
      };
      if (la_persona.rut != rut) {
        lista_temporal.push(per);
      }
      
    }
    this.lista_persona=lista_temporal;
    localStorage.setItem('misdatos',JSON.stringify(lista_temporal));
  }
  actualizar(rut:String){
    alert('selecciono actualizar' + rut);
    this.router.navigate(['/ejemplo2',rut])
  }
  listar(){
    var datos= localStorage.getItem('misdatos');
    datos = datos.replace('[','');
    datos = datos.replace(']','');
    datos = datos.split('},{').join('};{');
    //alert(datos);
    var lista_temporal= new Array();
    var per;
    var arreglo_temp= datos.split(";");
    for (let index = 0; index < arreglo_temp.length; index++) {    
      var registro = arreglo_temp[index];
      var la_persona = JSON.parse(registro);
      per={
        rut: la_persona.rut,
        nombre: la_persona.nombre
      };
      lista_temporal.push(per);
      
    }
    this.lista_persona=lista_temporal;
  }
}
