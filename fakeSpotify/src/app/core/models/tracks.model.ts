import { ArtistModel } from "./artist.model";

export interface TrackModel {
    filter(arg0: (a: any) => boolean): unknown;
    name: string;
    album: string;
    cover: string;
    url: string;
    _id: number;
    artist?: ArtistModel;

}