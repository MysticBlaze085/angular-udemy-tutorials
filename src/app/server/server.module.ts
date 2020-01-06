import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { ServerComponent } from './server.component';

const routes: Routes = [
  {path: '', component: ServerComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ServerComponent, CockpitComponent, ServerElementComponent],
  exports: [CockpitComponent, ServerElementComponent]
})
export class ServerModule {
}