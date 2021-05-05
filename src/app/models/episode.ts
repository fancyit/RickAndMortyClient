import { IPager } from "./pager";

export interface IEpisode {
  id: number,
  name: string,
  air_date: string,
  episode: string,
  characters: string[],
  url: string,
  created: string
}

export interface IPgedEpisodesList {
  info: IPager,
  results: IEpisode[];
}