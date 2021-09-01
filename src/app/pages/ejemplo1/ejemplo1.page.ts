import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-ejemplo1',
  templateUrl: './ejemplo1.page.html',
  styleUrls: ['./ejemplo1.page.scss'],
})
export class Ejemplo1Page implements OnInit {

  constructor(private alertController: AlertController) { }

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
  }
  actualizar(rut:String){
    alert('selecciono actualizar' + rut);
  }
  listar(){
    var datos= localStorage.getItem('misdatos');
    datos = datos.replace('[','');
    datos = datos.replace(']','');
    datos = datos.split('},{').join('};{');
    alert(datos);
  }
}
