import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { AlimentosFormComponent } from './components/alimentos-form/alimentos-form.component';
import { AlimentosListComponent } from './components/alimentos-list/alimentos-list.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';


import {AlimentosService } from './services/alimentos.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AlimentosFormComponent,
    AlimentosListComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AlimentosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
