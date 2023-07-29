import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortraitClassificationRoutingModule } from './portrait-classification-routing.module';
import { PortraitClassificationComponent } from './portrait-classification.component';


@NgModule({
  declarations: [
    PortraitClassificationComponent
  ],
  imports: [
    CommonModule,
    PortraitClassificationRoutingModule
  ]
})
export class PortraitClassificationModule { }
