import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private nombreUsuario: string = '';

  constructor() {}

  // Guardar el nombre del usuario
  setNombreUsuario(nombre: string) {
    this.nombreUsuario = nombre;
  }

  // Obtener el nombre del usuario
  getNombreUsuario(): string {
    return this.nombreUsuario;
  }
}
