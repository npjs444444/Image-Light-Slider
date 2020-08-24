const getAllImage = document.querySelectorAll(".thumb-img");
const previewImage = document.querySelector("#main");
const backgroundImage = document.querySelector("#bgImage");

previewImage.src = getAllImage[0].src;
backgroundImage.src = getAllImage[0].src;
getAllImage[0].classList.add("active");

getAllImage.forEach((value) => {
  value.addEventListener("click", () => {
    previewImage.src = value.src;
    backgroundImage.src = value.src;
    for (var i = 0; i < getAllImage.length; i++) {
      getAllImage[i].classList.remove("active");
    }

    value.classList.add("active");
  });
});
