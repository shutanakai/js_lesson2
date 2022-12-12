window.addEventListener("load", () => {

  // Profileボタン
  const profileButton = document.querySelector(".navigation__button--profile");

  // Hobbyボタン
  const hobbyButton = document.querySelector(".navigation__button--hobby");

  // Birthplaceボタン
  const birthplaceButton = document.querySelector(".navigation__button--birthplace");

  // 全てのボタン
  const triggerButtons = document.querySelectorAll(".navigation__button");

  // コンテナー
  const container = document.querySelector(".cardsContainer__mask");


  // ボタンを押せるようにする
  const enableButton = (button) => {
    button.style.pointerEvents = "";
    button.style.color = "#fff";
  };

  // ボタンを非活性にする
  const disableButton = (button) => {
    button.style.pointerEvents = "none";
    button.style.color = "#555";
  };

  // カルーセルをスライドさせる
  const slideCarousel = (index) => {
    const percent = `${-100 * index}%`;
    container.style.transform = `translateX(${percent})`;
  };

  // ボタンを制御する
  const buttonControl = (targetButton) => {

    // すべてのボタンを押せるようにする
    for(let index = 0; index < triggerButtons.length; index++) {
      const button = triggerButtons[index];
      enableButton(button);
    };

    // 参考(forEach)
    // triggerButtons.forEach((button) => {
    //   enableButton(button);
    // });

    // 現在のコンテンツのボタンを非活性にする
    disableButton(targetButton);

  };

  // Profileボタンを非活性にする
  disableButton(profileButton);

  profileButton.addEventListener("click", () => {
    slideCarousel(0);
    buttonControl(profileButton);
  });

  hobbyButton.addEventListener("click", () => {
    slideCarousel(1);
    buttonControl(hobbyButton);
  });

  birthplaceButton.addEventListener("click", () => {
    slideCarousel(2);
    buttonControl(birthplaceButton);
  });

});
