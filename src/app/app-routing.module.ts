import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayersComponent } from './players/players.component';
import { SquadComponent } from './squad/squad.component';
import { SquadSelectorComponent } from './squad-selector/squad-selector.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PlayerDetailComponent } from './player-detail/player-detail.component';

const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'players', component: PlayersComponent },
    { path: 'squad-selector', component: SquadSelectorComponent },
    { path: 'squad', component: SquadComponent },
    { path: 'detail/:id', component: PlayerDetailComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
