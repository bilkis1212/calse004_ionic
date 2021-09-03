import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-ejemplo2',
  templateUrl: './ejemplo2.page.html',
  styleUrls: ['./ejemplo2.page.scss'],
})
export class Ejemplo2Page implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    var valor = this.activatedRoute.snapshot.paramMap.get('valor');
    //alert('recupero parametro:' + valor);
    this.buscar(valor);
  }
  persona = new FormGroup({
    elRut: new FormControl(''),
    elNombreCompleto: new FormControl(''),
    elEdad: new FormControl('')
  });
  perso:any={
    rut:'111',
  };

  buscar(rut: String) {
    var datos = localStorage.getItem('misdatos');
    datos = datos.replace('[', '');
    datos = datos.replace(']', '');
    datos = datos.split('},{').join('};{');
    // alert(datos);
    var arreglo_temp = datos.split(";");
    for (let index = 0; index < arreglo_temp.length; index++) {
      var registro = arreglo_temp[index];
      var la_persona = JSON.parse(registro);
      if (la_persona.rut == rut) {
        this.perso={
          rut: la_persona.rut,
        };
        this.persona.controls.elNombreCompleto.setValue(la_persona.nombre);
      }

    }
  }
}
