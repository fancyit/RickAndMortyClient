import {throwError as observableThrowError,  Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ICharacter, IPagedCharactersList } from '../models/character';
import { tap, catchError } from 'rxjs/operators';
import { GETCHARACTER, GETPAGEDCHARACTERS } from '../constants';



@Injectable()
export class CharacterService {

  constructor(private http:HttpClient) { }

  getCharacterById(id: number): Observable<ICharacter>{
    return this.http.get<ICharacter>(GETCHARACTER + id)
                    .pipe(catchError(this.errorHandler))
  } 

  getPagedCharacters(page: number): Observable<IPagedCharactersList>{
    return this.http.get<IPagedCharactersList>(GETPAGEDCHARACTERS + page)
                    .pipe(catchError(this.errorHandler))
  }
  
  errorHandler(error: HttpErrorResponse){
    return observableThrowError(error.message || "Server Error");
  }

}