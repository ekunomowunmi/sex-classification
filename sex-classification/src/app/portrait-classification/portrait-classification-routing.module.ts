import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortraitClassificationComponent } from './portrait-classification.component';

const routes: Routes = [
  {
    path:'',
    component:PortraitClassificationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortraitClassificationRoutingModule { }
