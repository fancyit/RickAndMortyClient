import { Component, OnInit } from '@angular/core';
import { IPgedEpisodesList } from 'src/app/models/episode';
import { EpisodeService } from 'src/app/services/episode.service';
import { ICharacter, IPagedCharactersList } from '../../../../models/character';
import { CharacterService } from '../../../../services/character.service';


@Component({
  selector: 'app-cards-listing',
  templateUrl: 'cards-listing.component.html',
  styleUrls: ['cards-listing.component.css', '../../../reset.css'],
  
})

export class CardsListingComponent implements OnInit {
  response: any;
  character: ICharacter;
  pagedCharactersList: IPagedCharactersList;
  episodesList: IPgedEpisodesList;


  constructor(private characterService: CharacterService,
              private episodeService: EpisodeService) { }

  ngOnInit() { 
   this.getPagedCharacters();      
  }
    
  getPagedCharacters() {
    this.characterService
      .getPagedCharacters(1)
      .subscribe(data => {        
        this.pagedCharactersList = data;
        console.log(this.pagedCharactersList);
      });
  }
  getPagedEpisodes() {
    this.episodeService
        .getAllEpisodes()        
        .subscribe((data) =>{
          this.episodesList = data;
          console.log(this.episodesList);          
        })        
  }

}