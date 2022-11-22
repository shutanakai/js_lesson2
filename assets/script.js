window.addEventListener("load", () => {

  // Profileボタンを非活性にする
  document.querySelector(".navigation__button--profile").style.pointerEvents = "none";
  document.querySelector(".navigation__button--profile").style.color = "#555";

  // Hobbyボタンを押した時
  document.querySelector(".navigation__button--hobby").addEventListener("click", function () {

    // .cardsContainer__maskを-100%のところへ横に動かす
    document.querySelector(".cardsContainer__mask").style.transform = "translateX(-100%)";


    // Hobbyボタンを非活性にする
    document.querySelector(".navigation__button--hobby").style.pointerEvents = "none";
    document.querySelector(".navigation__button--hobby").style.color = "#555";

    // Profileボタンを押せるようにする
    document.querySelector(".navigation__button--profile").style.pointerEvents = "";
    document.querySelector(".navigation__button--profile").style.color = "#fff";
  });

  // Profileボタンを押した時
  document.querySelector(".navigation__button--profile").addEventListener("click", function () {

    // .cardsContainer__maskを-0%のところへ横に動かす
    document.querySelector(".cardsContainer__mask").style.transform = "translateX(0%)";

    // Profileボタンを非活性にする
    document.querySelector(".navigation__button--profile").style.pointerEvents = "none";
    document.querySelector(".navigation__button--profile").style.color = "#555";

    // Hobbyボタンを押せるようにする
    document.querySelector(".navigation__button--hobby").style.pointerEvents = "";
    document.querySelector(".navigation__button--hobby").style.color = "#fff";

  });

});
