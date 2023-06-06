const setActiveElement = (button) => {
    const activeBtn = document.querySelector(".active-btn");
    if (activeBtn) {
      activeBtn.classList.remove("active-btn");
    }
    button.classList.add("active-btn");
  
    const activeEl = document.querySelector(".active");
    if (activeEl) {
      activeEl.classList.remove("active");
    }
    const newActiveEl = document.getElementById(button.dataset.id);
    newActiveEl.classList.add("active");
  };
  
  const handleControlButtonClick = (event) => {
    const button = event.target;
    setActiveElement(button);
  };
  
  const handleThemeButtonClick = () => {
    document.body.classList.toggle("light-mode");
  };
  
  const addEventListeners = () => {
    const controlButtons = document.querySelectorAll(".control");
    controlButtons.forEach((button) => {
      button.addEventListener("click", handleControlButtonClick);
    });
  
    const themeButton = document.querySelector(".theme-btn");
    themeButton.addEventListener("click", handleThemeButtonClick);
  };
  
  addEventListeners();