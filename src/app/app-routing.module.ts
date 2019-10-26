import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SquadComponent } from './squad/squad.component';
import { SquadSelectorComponent } from './squad-selector/squad-selector.component';
import { PlayerDetailComponent } from './player-detail/player-detail.component';

const routes: Routes = [
    { path: '', redirectTo: '/squad-selector', pathMatch: 'full' },
    { path: 'squad-selector', component: SquadSelectorComponent },
    { path: 'squad', component: SquadComponent },
    { path: 'detail/:id', component: PlayerDetailComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
