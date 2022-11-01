var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// import { database } from "./flat-rent-sdk.js";
import { localS } from "./localStorage.js";
export function dateToUnixStamp(date) {
    return date.getTime() / 1000;
}
export function responseToJson(requestPromise) {
    return requestPromise
        .then((response) => {
        return response.text();
    })
        .then((responseText) => {
        return JSON.parse(responseText);
    });
}
export function searchApartment() {
    return __awaiter(this, void 0, void 0, function* () {
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams) {
            const checkInDate = new Date(urlParams.get("checkin"));
            const checkOutDate = new Date(urlParams.get("checkout"));
            const maxPrice = urlParams.get("price");
            let url = `http://localhost:3030/places?checkInDate=${dateToUnixStamp(checkInDate)}&checkOutDate=${dateToUnixStamp(checkOutDate)}&coordinates=59.9386,30.3141`;
            if (+maxPrice > 0) {
                url += `&maxPrice=${maxPrice}`;
            }
            const response = yield fetch(url);
            const responseText = yield response.text();
            const data = JSON.parse(responseText);
            if (!data) {
                throw Error("Нет апартаментов по указанным параметрам");
            }
            else {
                console.log(data);
                const textdb = data;
                if (data.length > 0 || textdb.length > 0) {
                    const textDbFormated = [];
                    textdb.forEach((text) => {
                        textDbFormated.push({
                            id: text.id,
                            image: `/img/${text.photos[0]}`,
                            name: text.title,
                            description: text.details,
                            remoteness: 1,
                            price: text.price,
                        });
                    });
                    const allResults = [].concat(data, textDbFormated);
                    console.log(allResults);
                    let str = '<div class="search-list-block"><ul class="results-list">';
                    allResults.forEach((result_2) => {
                        let active = "";
                        const favLocalVal = localS.get("favoriteItems");
                        if (favLocalVal != null) {
                            JSON.parse(favLocalVal).forEach((favorite) => {
                                if (favorite.id === result_2.id.toString()) {
                                    active = "active";
                                }
                            });
                        }
                        if (+maxPrice >= result_2.price || +maxPrice < 1) {
                            str += `<li id="book_${result_2.id}" class="result">
              <div class="result-container">
                <div class="result-img-container">
                  <div class="favorites ${active}" data-fav="${result_2.id}"></div>
                  <img class="result-img" src="${result_2.image}" alt="${result_2.name}">
                </div>	
                <div class="result-info">
                  <div class="result-info--header">
                    <p>${result_2.name}</p>
                    <p class="price">${result_2.price}&#8381;</p>
                  </div>
                  <div class="result-info--map"><i class="map-icon"></i> ${result_2.remoteness}км от вас</div>
                  <div class="result-info--descr">${result_2.description}</div>
                  <div class="result-info--footer">
                    <div>
                      <button>Забронировать</button>
                    </div>
                  </div>
                </div>
              </div>
            </li>`;
                        }
                    });
                    str += "</ul></div>";
                    return str;
                }
                else {
                    return '<p class="paddinged centered">Нет квартир в списке, нажмите поиск</p>';
                }
            }
        }
        return this;
    });
}
