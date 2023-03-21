import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { mdiTwitter } from '@mdi/js';

let modulesArr = [MatButtonModule, MatIconModule];

@NgModule({
  imports: [modulesArr],
  exports: [modulesArr],
})
export class MaterialModule {}
