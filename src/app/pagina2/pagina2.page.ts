import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service'; // Importamos el servicio

@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.page.html',
  styleUrls: ['./pagina2.page.scss'],
})
export class Pagina2Page implements OnInit {
  nombre: string = '';

  constructor(private authService: AuthService) {}

  ngOnInit() {
    // Obtenemos el nombre del usuario desde el servicio
    this.nombre = this.authService.getNombreUsuario();

    // Si no se encuentra el nombre, mostramos 'Invitado'
    if (!this.nombre) {
      this.nombre = 'Invitado';
    }
  }
}



