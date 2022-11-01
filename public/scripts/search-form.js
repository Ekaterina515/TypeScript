import { renderBlock } from "./lib.js";
import { localS } from "./localStorage.js";
export function renderSearchFormBlock() {
    const dateObj = new Date();
    const datePlus2_Obj = new Date(+dateObj + 2 * 86400000);
    const minDate = dateObj.toLocaleDateString("en-CA");
    const curDate = dateObj.toLocaleDateString("en-CA");
    const minOutDate = datePlus2_Obj.toLocaleDateString("en-CA");
    dateObj.setMonth(dateObj.getMonth() + 2); // + 1 month
    dateObj.setDate(0);
    const maxOutDate = dateObj.toLocaleDateString("en-CA");
    function getSearchFormData() {
        const urlParams = new URLSearchParams(window.location.search);
        const storage = {
            city: urlParams.get("city") ? urlParams.get("city") : "Санкт-Петербург",
            checkin: urlParams.get("checkin") ? urlParams.get("checkin") : curDate,
            checkout: urlParams.get("checkout")
                ? urlParams.get("checkout")
                : minOutDate,
            price: urlParams.get("price") ? urlParams.get("price") : "",
        };
        localS.set("searchParams", storage);
        return storage;
    }
    const storage = getSearchFormData();
    renderBlock("search-form-block", `
    <form>
      <fieldset class="search-filedset">
        <div class="row">
          <div>
            <label for="city">Город</label>
            <input id="city" type="text" disabled value="${storage.city}" />
            <input type="hidden" disabled value="59.9386,30.3141" />
          </div>
          <!--<div class="providers">
            <label><input type="checkbox" name="provider" value="homy" checked /> Homy</label>
            <label><input type="checkbox" name="provider" value="flat-rent" checked /> FlatRent</label>
          </div>--!>
        </div>
        <div class="row">
          <div>
            <label for="check-in-date">Дата заезда</label>
            <input id="check-in-date" type="date" value="${curDate}" min="${minDate}" max="${maxOutDate}" name="checkin" />
          </div>
          <div>
            <label for="check-out-date">Дата выезда</label>
            <input id="check-out-date" type="date" value="${storage.checkout}" min="${minOutDate}" max="${maxOutDate}" name="checkout" />
          </div>
          <div>
            <label for="max-price">Макс. цена суток</label>
            <input id="max-price" type="text" value="${storage.price}" name="price" class="max-price" />
          </div>
          <div>
            <div><button onclick="getSearchFormData()">Найти</button></div>
          </div>
        </div>
      </fieldset>
    </form>
    `);
}
