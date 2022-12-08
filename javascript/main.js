const BTN = document.getElementById("btn__form")
const EMAIL = document.getElementById("email")
const IMG_ERROR = document.getElementById('img__error')
const REGEX = {
  email: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
};

const ERROR_NAME = document.getElementById("prueba");

BTN.addEventListener("click", (e) => {
  e.preventDefault();

  if (EMAIL.value === null || EMAIL.value === "") {
    ERROR_NAME.innerHTML = "Please provide a valid email"
    EMAIL.style.outline = "3px solid hsl(0, 93%, 68%)"
    IMG_ERROR.style.display = 'block'
  } else if (EMAIL.value.match(REGEX.email)) {
    ERROR_NAME.innerHTML = "";
    EMAIL.style.outline = "";
    IMG_ERROR.style.display = "";
  } else {
    ERROR_NAME.innerHTML = "Please provide a valid email";
    EMAIL.style.outline = "3px solid hsl(0, 93%, 68%)";
    IMG_ERROR.style.display = "block";

  }
});

