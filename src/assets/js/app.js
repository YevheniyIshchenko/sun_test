const city = document.getElementById("city");
const street = document.getElementById("street");
const house = document.getElementById("house");
const btn = document.getElementById("submitBtn");
const form = document.getElementById("address");

const cityError = document.querySelector(".error__city");
const streetError = document.querySelector(".error__street");
const houseError = document.querySelector(".error__house");

city.addEventListener("focus", () => {
  city.value === ""
    ? (cityError.style.display = "block")
    : (cityError.style.display = "none");
});
city.addEventListener("keyup", () => {
  cityError.style.display = "none";
});

street.addEventListener("focus", () => {
  street.value === ""
    ? (streetError.style.display = "block")
    : (streetError.style.display = "none");
});
street.addEventListener("keyup", () => {
  streetError.style.display = "none";
});

house.addEventListener("focus", () => {
  house.value === ""
    ? (houseError.style.display = "block")
    : (streetError.style.display = "none");
});
house.addEventListener("keyup", () => {
  houseError.style.display = "none";
});

form.addEventListener("change", () => {
  btn.disabled = true;
  city.value == "" || street.value == "" || house.value == ""
    ? (btn.disabled = true)
    : (btn.disabled = false);
});

btn.addEventListener("click", () => {
  city.value = "";
  street.value = "";
  house.value = "";
  btn.disabled = true;
});
