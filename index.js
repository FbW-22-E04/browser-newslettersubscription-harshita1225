const btnClose = document.querySelector(".btn-close");
const popup = document.querySelector(".popup");

btnClose.addEventListener("click", function () {
  popup.style.display = "none";
});

document.addEventListener("mouseenter", function (e) {
  const y = e.offsetY;
  if (y > 0 && y < 10) {
    popup.style.display = "flex";
  } else {
    popup.style.display = "none";
  }
});
