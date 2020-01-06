import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeaderComponent } from './header/header.component';

import { ServerModule } from './server/server.module';
import { RecipeAppModule } from './recipe-app/recipe-app.module';

const routes: Routes = [
  {path: 'server', loadChildren: () => import('./server/server.module').then(mod => mod.ServerModule)},
  {path: 'recipe-app', loadChildren: () => import('./recipe-app/recipe-app.module').then(mod => mod.RecipeAppModule)},
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
]

@NgModule({
  imports:      [ BrowserModule, FormsModule, ServerModule, RouterModule.forRoot(routes) ],
  declarations: [ AppComponent, HelloComponent, HeaderComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
