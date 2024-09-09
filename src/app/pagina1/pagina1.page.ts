import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthService } from '../services/auth.service'; // Importamos el servicio

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.page.html',
  styleUrls: ['./pagina1.page.scss'],
})
export class Pagina1Page {
  correo: string = '';
  clave: string = '';

  user1: string = 'fra.castrop@duocuc.cl';
  clave1: string = '12345';
  nombre1: string = 'Francisca';

  constructor(
    private toastController: ToastController, 
    private router: Router,
    private authService: AuthService // Inyectamos el servicio
  ) {}

  onSubmit() {
    if (this.correo === this.user1 && this.clave === this.clave1) {
      // Guardamos el nombre del usuario en el servicio
      this.authService.setNombreUsuario(this.nombre1);

      // Navegamos a la página de bienvenida
      this.router.navigate(['/pagina2']);
    } else {
      this.presentToast('Usuario y/o contraseña incorrecta');
    }
  }

  async presentToast(msj: string) {
    const toast = await this.toastController.create({
      message: msj,
      duration: 2000,
      position: 'bottom',
    });
    await toast.present();
  }
}

