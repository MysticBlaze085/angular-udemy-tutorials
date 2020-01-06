import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';

import { ServerModule } from './server/server.module';

const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'server', loadChildren: () => import('./server/server.module').then(mod => mod.ServerModule)}
]

@NgModule({
  imports:      [ BrowserModule, FormsModule, ServerModule, RouterModule.forRoot(routes) ],
  declarations: [ AppComponent, HelloComponent, HeaderComponent, RecipesComponent, RecipeListComponent, RecipeDetailComponent, RecipeItemComponent, ShoppingListComponent, ShoppingEditComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
