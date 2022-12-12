window.addEventListener("load", () => {

  // Profileボタン
  const profileButton = document.querySelector(".navigation__button--profile");

  // Hobbyボタン
  const hobbyButton = document.querySelector(".navigation__button--hobby");

  // Birthplaceボタン
  const birthplaceButton = document.querySelector(".navigation__button--birthplace");

  // コンテナー
  const container = document.querySelector(".cardsContainer__mask");


  // ボタンを押せるようにする
  const enableButton = (button) => {
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
  const slideCarousel = (percent) => {
    container.style.transform = `translateX(${percent})`;
  }

  // ボタンを制御する
  const buttonControl = (targetButton) => {

    // すべてのボタンを押せるようにする
    enableButton(profileButton);
    enableButton(hobbyButton);
    enableButton(birthplaceButton);

    // targetButtonを非活性にする
    if (targetButton === profileButton) {
      disableButton(profileButton);
    } else if (targetButton === hobbyButton) {
      disableButton(hobbyButton);
    } else {
      disableButton(birthplaceButton);
    }
  }

  // Profileボタンを非活性にする
  disableButton(profileButton);

  // Hobbyボタンを押した時
  hobbyButton.addEventListener("click", () => {

    // .cardsContainer__maskを-100%のところへ横に動かす
    slideCarousel("-100%");

    // ボタンの制御
    buttonControl(hobbyButton);
  });

  // Profileボタンを押した時
  profileButton.addEventListener("click", () => {

    // .cardsContainer__maskを-0%のところへ横に動かす
    slideCarousel("0%");

    // ボタンの制御
    buttonControl(profileButton);
  });

  birthplaceButton.addEventListener("click", () => {

    // .cardContainer__maskを-200%のところへ横に動かす
    slideCarousel("-200%");

    // ボタンの制御
    buttonControl(birthplaceButton);
  })

});
