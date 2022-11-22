window.addEventListener("load", () => {

  // Profileボタン
  const profileButton = document.querySelector(".navigation__button--profile");

  // Hobbyボタン
  const hobbyButton = document.querySelector(".navigation__button--hobby");

  // コンテナー
  const container = document.querySelector(".cardsContainer__mask");

  // Profileボタンを非活性にする
  profileButton.style.pointerEvents = "none";
  profileButton.style.color = "#555";

  // Hobbyボタンを押した時
  hobbyButton.addEventListener("click", function () {

    // .cardsContainer__maskを-100%のところへ横に動かす
    container.style.transform = "translateX(-100%)";


    // Hobbyボタンを非活性にする
    hobbyButton.style.pointerEvents = "none";
    hobbyButton.style.color = "#555";

    // Profileボタンを押せるようにする
    profileButton.style.pointerEvents = "";
    profileButton.style.color = "#fff";
  });

  // Profileボタンを押した時
  profileButton.addEventListener("click", function () {

    // .cardsContainer__maskを-0%のところへ横に動かす
    container.style.transform = "translateX(0%)";

    // Profileボタンを非活性にする
    profileButton.style.pointerEvents = "none";
    profileButton.style.color = "#555";

    // Hobbyボタンを押せるようにする
    hobbyButton.style.pointerEvents = "";
    hobbyButton.style.color = "#fff";

  });

});
