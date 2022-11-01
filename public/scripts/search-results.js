import { renderBlock } from "./lib.js";
import { searchApartment } from "./search.js";
export function renderSearchStubBlock() {
    renderBlock("search-results-block", `
    <div class="before-results-block">
      <img src="img/start-search.png" />
      <p>Чтобы начать поиск, заполните форму и&nbsp;нажмите "Найти"</p>
    </div>
    `);
}
export function renderEmptyOrErrorSearchBlock(reasonMessage) {
    renderBlock("search-results-block", `
    <div class="no-results-block">
      <img src="img/no-results.png" />
      <p>${reasonMessage}</p>
    </div>
    `);
}
export function renderSearchResultsBlock() {
    renderBlock("search-results-block", `
    <form id="sort">
    <div class="search-results-header">
        <p>Результаты поиска</p>
        <div class="search-results-filter">
            <span><i class="icon icon-filter"></i> Сортировать:</span>
            <select id="sorting">
                <option value="cheap">Сначала дешёвые</option>
                <option value="rich">Сначала дорогие</option>
                <option value="close">Сначала ближе</option>
            </select>
        </div>
    </div>
    </form>
    `);
    searchApartment().then((data) => {
        renderBlock("search-list-block", data);
    });
}
