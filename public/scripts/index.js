import { renderSearchFormBlock } from "./search-form.js";
import { renderSearchResultsBlock } from "./search-results.js";
import { renderSearchStubBlock } from "./search-results.js";
import { renderUserBlock } from "./user.js";
import { toggleFavoriteItem } from "./toggleFavorites.js";
import { bookStart } from "./booking.js";
window.addEventListener("DOMContentLoaded", () => {
    renderUserBlock();
    renderSearchFormBlock();
    renderSearchStubBlock();
    renderSearchResultsBlock();
    toggleFavoriteItem();
    setTimeout(() => {
        bookStart();
    }, 500);
});
