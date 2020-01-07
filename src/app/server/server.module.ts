import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { ServerComponent } from './server.component';

const routes: Routes = [
  {path: '', component: ServerComponent},
  {path: 'server', pathMatch: 'full', component: ServerComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ],
  declarations: [ServerComponent, CockpitComponent, ServerElementComponent],
  exports: [CockpitComponent, ServerElementComponent, ServerComponent]
})
export class ServerModule {
}