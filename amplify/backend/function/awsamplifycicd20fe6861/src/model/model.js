/* eslint-disable import/prefer-default-export */
import { v4 as uuidv4 } from 'uuid'

export class Place {
  constructor(body) {
    this.id = uuidv4();
    this.placeName = body?.placeName;
    this.placeAddress = body?.placeAddress;
    this.rating = body?.rating;
    this.comments = body?.comments;
    this.imageUrl = body?.imageUrl;
    this.buket = body?.buket;
    this.continent = body?.continent;
  }
}
