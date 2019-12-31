import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {ButtonModule} from 'primeng/button';
import {FileUploadModule} from 'primeng/fileupload';
import {TabViewModule} from 'primeng/tabview';
import {TableModule} from 'primeng/table';
import {ValidarCorregirComponent} from './components/validar-corregir/validar-corregir.component';

import {ServicioAdministradorHorasService} from './services/servicio-administrador-horas.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ValidarCorregirComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    FileUploadModule,
    TabViewModule,
    TableModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ServicioAdministradorHorasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
