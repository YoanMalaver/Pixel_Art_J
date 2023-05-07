import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Routes
import { APP_ROUTING } from './app.routes';
//Servicios

//Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { GaleryComponent } from './components/galery/galery.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    GaleryComponent,
  ],
  imports: [BrowserModule, APP_ROUTING],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
