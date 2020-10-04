import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_ROUTING } from './app.routes';

import { AppComponent } from './app.component';
import { SgStyleComponent } from './components/sg-style/sg-style.component';
import { CssComponent } from './components/css/css.component';
import { ClasesComponent } from './components/clases/clases.component';
import { ResaltadoDirective } from './directives/resaltado.directive';
import { NgSwitchComponent } from './components/ng-switch/ng-switch.component';
import { HomeComponent } from './components/home/home.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { UsuarioNuevoComponent } from './components/usuario/usuario-nuevo.component';
import { UsuarioEditarComponent } from './components/usuario/usuario-editar.component';
import { UsuarioDetalleComponent } from './components/usuario/usuario-detalle.component';
import { NabvarComponent } from './components/nabvar/nabvar.component';

@NgModule({
    declarations: [
        AppComponent,
        SgStyleComponent,
        CssComponent,
        ClasesComponent,
        ResaltadoDirective,
        NgSwitchComponent,
        HomeComponent,
        UsuarioComponent,
        UsuarioNuevoComponent,
        UsuarioEditarComponent,
        UsuarioDetalleComponent,
        NabvarComponent
    ],
    imports: [
        BrowserModule,
        APP_ROUTING
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
