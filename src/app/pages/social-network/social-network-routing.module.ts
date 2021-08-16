import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SocialNetworkComponent } from './social-network.component';

const routes: Routes = [
  {
    path: '',
    component: SocialNetworkComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SocialNetworkRoutingModule {}
