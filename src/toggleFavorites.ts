import { localS } from "./localStorage.js";
import { TFavorite, TFavorites } from "./types.js";

export function toggleFavoriteItem() {
  setTimeout(() => {
    document.querySelectorAll("[data-fav]").forEach((item) => {
      item.addEventListener("click", (event) => {
        if (!(event.target instanceof HTMLDivElement)) {
          return;
        } else {
          const target = event.target as HTMLDivElement;
          const id = target.dataset.fav;

          if (!item.classList.contains("active")) {
            const id = event.target.dataset.fav.toString();
            const favoriteItems: any = localS.get("favoriteItems");
            const favItemsObj = JSON.parse(favoriteItems);

            const newItemToLS = {
              id: id,
              name: target
                .closest(".result-container")
                .querySelectorAll(".result-info--header p")[0].textContent,
              image: target
                .closest(".result-container")
                .querySelectorAll(".result-img")[0]
                .getAttribute("src"),
            };

            if (favItemsObj == null) {
              const favItemsNew = [];
              favItemsNew.push(newItemToLS);
              localS.set(
                "favoriteItems",
                JSON.parse(JSON.stringify(favItemsNew))
              );
            } else {
              favItemsObj.push(newItemToLS);
              localS.set("favoriteItems", favItemsObj);
            }

            target.classList.add("active");
          } else {
            const favoriteItems: any = localS.get("favoriteItems");
            const favoriteObj = JSON.parse(favoriteItems);

            favoriteObj.forEach((favorite: TFavorite, index: number) => {
              if (favorite.id === id) {
                favoriteObj.splice(index, 1);
              }
            });
            if (favoriteObj.length) {
              localS.set("favoriteItems", favoriteObj);
            }

            target.classList.remove("active");
          }
        }

        const favLocalVal: any = localS.get("favoriteItems");
        const favoritesAmount: TFavorites = JSON.parse(favLocalVal);
        if (favoritesAmount) {
          const len = +favoritesAmount.length;
          const favoritesCount = len || 0;

          document.querySelectorAll(
            "p.fav"
          )[0].innerHTML = `<i class="heart-icon active"></i>${favoritesCount}`;
        }
      });
    });
  }, 1000);
}
