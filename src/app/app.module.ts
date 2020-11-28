import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { UsuarioService} from './usuario.service';

@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
