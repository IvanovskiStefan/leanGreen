let btn = document.getElementsByClassName("card-btn");
let accordion = document.getElementsByClassName("content-box");

// btn.addEventListener("click");

for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}
