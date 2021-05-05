import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/elements/character/characterCard/card.component';
import { CharacterService } from './services/character.service';
import { EpisodeService } from './services/episode.service';
import { CardsListingComponent } from './components/elements/character/characterCardsListing/cards-listing.component';
import { PagerComponent } from './components/elements/pager/pager.component';
import { NavigationComponent } from './components/layout/navigation.component';


@NgModule({
  declarations: [
    AppComponent,   
    CardComponent,
    CardsListingComponent,
    PagerComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CharacterService, EpisodeService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
