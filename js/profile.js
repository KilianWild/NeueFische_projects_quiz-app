const buttonDarkMode = document.querySelector('[data-js="button-setting-darkmode"]');
const body = document.querySelector("body");

buttonDarkMode.addEventListener("click", (event) => {
   const buttonSetting = event.target.closest('[data-js="button-setting-darkmode"]');
   console.log(buttonSetting);

   if (buttonSetting.dataset.darkmodeActive === "false") {
      buttonSetting.classList.add("active");
      buttonSetting.dataset.darkmodeActive = true;
      body.classList.add("dark-mode");
   } else {
      buttonSetting.classList.remove("active");
      buttonSetting.dataset.darkmodeActive = false;
      body.classList.remove("dark-mode");
   }
});
