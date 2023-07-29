import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FingerprintClassificationComponent } from './fingerprint-classification.component';

const routes: Routes = [
  {
    path:'',
    component:FingerprintClassificationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FingerprintClassificationRoutingModule { }
