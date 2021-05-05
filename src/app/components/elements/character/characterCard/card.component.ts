import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { IEpisode } from 'src/app/models/episode';
import { ICharacter } from '../../../../models/character';



@Component({
  selector: 'app-card',
  templateUrl: 'card.component.html',
  styleUrls: ['card.component.css'],
  
})

export class CardComponent implements OnInit {  
  @Input() character: ICharacter;  
  episode: IEpisode;

  constructor(private http: HttpClient){ }
  ngOnInit(){ 
    this.getEpisodeName();
  }
  getEpisodeName(){
    const url = this.character.episode[0];
    this.http.get<IEpisode>(url).subscribe((data) => {
      this.episode = data      
    });    
  }
}