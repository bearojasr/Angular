import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  UsuariosUrl = 'https://jsonplaceholder.typicode.com/users';
  constructor( private http: HttpClient) { }

  Listar() {
    return this.http.get<any[]>(`${this.UsuariosUrl}`);
  }
}
