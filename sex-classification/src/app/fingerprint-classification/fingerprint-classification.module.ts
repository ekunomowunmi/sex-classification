import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FingerprintClassificationRoutingModule } from './fingerprint-classification-routing.module';
import { FingerprintClassificationComponent } from './fingerprint-classification.component';


@NgModule({
  declarations: [
    FingerprintClassificationComponent
  ],
  imports: [
    CommonModule,
    FingerprintClassificationRoutingModule
  ]
})
export class FingerprintClassificationModule { }
