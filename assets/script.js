window.addEventListener("load", () => {

  // Profileボタン
  const profileButton = document.querySelector(".navigation__button--profile");

  // Hobbyボタン
  const hobbyButton = document.querySelector(".navigation__button--hobby");

  // コンテナー
  const container = document.querySelector(".cardsContainer__mask");


  // ボタンを押せるようにする
  const enableButton = function (button) {
    button.style.pointerEvents = "";
    button.style.color = "#fff";
  }

  // ボタンを非活性にする
  // ※アロー関数の参考
  const disableButton = (button) => {
    button.style.pointerEvents = "none";
    button.style.color = "#555";
  }

  // カルーセルをスライドさせる
  const slideCarousel = function (percent) {
    container.style.transform = `transform(${percent})`;
  }

  // Profileボタンを非活性にする
  disableButton(profileButton);

  // Hobbyボタンを押した時
  hobbyButton.addEventListener("click", function () {

    // .cardsContainer__maskを-100%のところへ横に動かす
    slideCarousel("-100%");


    // Hobbyボタンを非活性にする
    disableButton(hobbyButton);

    // Profileボタンを押せるようにする
    enableButton(profileButton);
  });

  // Profileボタンを押した時
  profileButton.addEventListener("click", function () {

    // .cardsContainer__maskを-0%のところへ横に動かす
    slideCarousel("0%");

    // Profileボタンを非活性にする
    disableButton(profileButton);

    // Hobbyボタンを押せるようにする
    enableButton(hobbyButton);

  });

});
