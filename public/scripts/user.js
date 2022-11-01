import { renderBlock } from "./lib.js";
import { localS } from "./localStorage.js";
export function renderUserBlock() {
    const user = getUserData();
    renderBlock("user-block", `
    <div class="header-container">
      <img class="avatar" src="${user.avatarUrl}" alt="${user.username}" />
      <div class="info">
          <p class="name">${user.username}</p>
          <p class="fav">
            <i class="heart-icon${getFavoritesAmount() ? " active" : ""}"></i>${getFavoritesAmount()}
          </p>
      </div>
    </div>
    `);
}
export function getUserData() {
    const localUserVal = localS.get("user");
    let user = JSON.parse(localUserVal);
    if (!user) {
        user = {
            username: "no user",
            avatarUrl: "/img/avatar.png",
        };
    }
    return user;
}
export function getFavoritesAmount() {
    const favLocalVal = localS.get("favoriteItems");
    const favoritesAmount = JSON.parse(favLocalVal);
    if (favoritesAmount) {
        const len = +favoritesAmount.length;
        const favoritesCount = len || 0;
        return favoritesCount;
    }
    else {
        return 0;
    }
}
