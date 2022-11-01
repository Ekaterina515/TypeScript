import { GetData } from "./lib.js";
export class HomyProvider {
    find(url) {
        const flats = new GetData();
        return flats.getPlace(url, false);
    }
}
