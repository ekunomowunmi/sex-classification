import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { from, map } from 'rxjs';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'fingerprint'
  },
  {
    path:'fingerprint',
  loadChildren: () => 
  from(import('./fingerprint-classification/fingerprint-classification-routing.module')).pipe(map(m => m.FingerprintClassificationRoutingModule))
  },
  {
    path: 'portrait',
    loadChildren: () =>
      from(import('./portrait-classification/portrait-classification-routing.module')).pipe(map((m) => m.PortraitClassificationRoutingModule)),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
