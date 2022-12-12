window.addEventListener("load", () => {

  // Profileボタン
  const profileButton = document.querySelector(".navigation__button--profile");

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

    for(let index = 0; index < triggerButtons.length; index++) {
      const button = triggerButtons[index];
      if (button === targetButton) {
        disableButton(button);
      } else {
        enableButton(button);
      };
    };

    // 参考(forEach)
    // triggerButtons.forEach((button) => {
    //   if (button === targetButton) {
    //     disableButton(button);
    //   } else {
    //     enableButton(button);
    //   }
    // });
  }

  // Profileボタンを非活性にする
  disableButton(profileButton);

  for (let i = 0; i < triggerButtons.length; i++) {
    const button = triggerButtons[i];
    button.addEventListener("click", () => {
      slideCarousel(i);
      buttonControl(button);
    });

  }

  // 参考(forEach)
  // triggerButtons.forEach((button, i) => button.addEventListener("click", () => {
  //   slideCarousel(i);
  //   buttonControl(button);
  // }));
});
