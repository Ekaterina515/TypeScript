import { GetData } from "./lib.js";

export class HomyProvider {
  public find(url: string) {
    const flats = new GetData();
    return flats.getPlace(url, false);
  }
}
