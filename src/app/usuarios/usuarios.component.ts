import { Component, OnInit } from '@angular/core';
import { UsuarioService} from '../usuario.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuarios : any=[];

  constructor(private UsuarioService:UsuarioService) { }

  ngOnInit(): void {
    this.Listar();
  }

  Listar() {
    this.UsuarioService.Listar().subscribe(dados=>this.usuarios=dados);
  }

}
