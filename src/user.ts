import { renderBlock } from "./lib.js";
import { localS } from "./localStorage.js";
import { TFavorites } from "./types.js";

export function renderUserBlock() {
  const user = getUserData();

  renderBlock(
    "user-block",
    `
    <div class="header-container">
      <img class="avatar" src="${user.avatarUrl}" alt="${user.username}" />
      <div class="info">
          <p class="name">${user.username}</p>
          <p class="fav">
            <i class="heart-icon${
              getFavoritesAmount() ? " active" : ""
            }"></i>${getFavoritesAmount()}
          </p>
      </div>
    </div>
    `
  );
}

interface ITypeUser {
  username?: string;
  avatarUrl?: string;
}

export function getUserData() {
  const localUserVal: any = localS.get("user");
  let user: ITypeUser = JSON.parse(localUserVal);

  if (!user) {
    user = {
      username: "no user",
      avatarUrl: "/img/avatar.png",
    };
  }

  return user;
}

export function getFavoritesAmount() {
  const favLocalVal: any = localS.get("favoriteItems");
  const favoritesAmount: TFavorites = JSON.parse(favLocalVal);
  if (favoritesAmount) {
    const len = +favoritesAmount.length;
    const favoritesCount = len || 0;
    return favoritesCount;
  } else {
    return 0;
  }
}
