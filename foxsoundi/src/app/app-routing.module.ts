import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RightPanelComponent } from './right-panel/right-panel.component';
import { LeftPanelComponent } from './left-panel/left-panel.component';

const routes: Routes = [
  { path: 'rightPanel', component: RightPanelComponent},
  { path: 'rightPanel/:albumOrPlaylistOrTrack', component: RightPanelComponent},
  { path: 'leftPanel', component: LeftPanelComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
