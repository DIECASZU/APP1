import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  correo: string="";
  clave: string="";

  item: any={
    imagen: "assets/icon/favicon.png"
  }


  user1: string ="josue@duoc.cl";
  clave1: string ="12345";

  constructor(private toastController: ToastController, private router: Router) {}

  PasarDatos(){
    if (this.correo==this.user1 && this.clave==this.clave1){
     //Envio Datos  a pagina 2
     let navigationExtras: NavigationExtras = {
      state:{
       correito: this.correo,
       pass: this.clave
      }
     };
     this.router.navigate(['/pagina2'],navigationExtras);
     
    }
    else{
      this.presentToast("Usuario y/o contraseña incorrecta");
    }  
  }
   async presentToast(msj: string) {
     const toast = await this.toastController.create({
       message: msj,
       duration: 1500,
       position: 'bottom',
     });
 
    await toast.present();
  }

}
