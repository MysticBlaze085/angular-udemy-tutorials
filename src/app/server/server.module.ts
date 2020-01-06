import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElementComponent } from './server-element/server-element.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CockpitComponent, ServerElementComponent],
  exports: [CockpitComponent, ServerElementComponent]
})
export class ServerModule {
}