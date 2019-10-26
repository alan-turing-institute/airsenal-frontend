import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <- NgModel
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { PlayerDetailComponent } from './player-detail/player-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule }    from '@angular/common/http';
import { SquadComponent } from './squad/squad.component';
import { SquadSelectorComponent } from './squad-selector/squad-selector.component';

@NgModule({
    declarations: [
	AppComponent,
	PlayerDetailComponent,
	MessagesComponent,
	SquadComponent,
	SquadSelectorComponent
    ],
    imports: [
	BrowserModule,
	FormsModule,
	AppRoutingModule,
	HttpClientModule,
	MatSelectModule,
	MatInputModule,
	BrowserAnimationsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
