import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterPageComponent } from './components/elements/character/characterPage/character-page.component'
import { EpisodePageComponent } from './components/elements/episode/episode-page.component'
import { EpisodeListingComponent } from './components/elements/episode/episode-listing.component'
import { AppComponent } from './app.component';


const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'character-page', component: CharacterPageComponent},
  { path: 'episode-page', component: EpisodePageComponent },
  { path: 'episode-listing', component: EpisodeListingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
