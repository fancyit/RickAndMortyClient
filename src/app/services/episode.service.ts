import {throwError as observableThrowError,  Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IEpisode, IPgedEpisodesList } from '../models/episode';
import { tap, catchError } from 'rxjs/operators';
import { GETEPISODE, GETALLEPISODES } from '../constants';



@Injectable()
export class EpisodeService {

  constructor(private http:HttpClient) { }

  getEpisodeById(id: number): Observable<IEpisode>{
    return this.http.get<IEpisode>(GETEPISODE + id)
                    .pipe(catchError(this.errorHandler))
  } 

  getAllEpisodes(page?: number): Observable<IPgedEpisodesList>{    
    return this.http.get<IPgedEpisodesList>(GETALLEPISODES + (page || ''))
                    .pipe(catchError(this.errorHandler))
  }
  
  errorHandler(error: HttpErrorResponse){
    return observableThrowError(error.message || "Server Error");
  }

}