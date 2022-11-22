window.addEventListener("load", () => {
  const navigationToProfile = document.querySelector(
    ".navigation__button--profile"
  );
  const navigationToHobby = document.querySelector(
    ".navigation__button--hobby"
  );
  const cardsWrapper = document.querySelector(".cardsContainer__mask");

  navigationToProfile.addEventListener("click", (e) => {
    e.preventDefault();
    navigationToHobby.classList.remove("__current");
    navigationToProfile.classList.add("__current");
    cardsWrapper.classList.remove("__hobby");
    cardsWrapper.classList.add("__profile");
  });

  navigationToHobby.addEventListener("click", (e) => {
    e.preventDefault();
    navigationToProfile.classList.remove("__current");
    navigationToHobby.classList.add("__current");
    cardsWrapper.classList.remove("__profile");
    cardsWrapper.classList.add("__hobby");
  });
});
