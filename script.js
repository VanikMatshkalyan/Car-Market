let slideIndex = 1;
let slides = document.getElementsByClassName("slide");
if (slides.length) {
  showDivs(slideIndex);
}

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function showDivs(n) {
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

function headerOpenHandler() {
  let menuList = document.querySelector(".menu-list");
  let burgerMenuBtn = document.querySelector(".hamburger-logo");
  if (menuList.classList.contains("opened")) {
    menuList.classList.remove("opened");
    burgerMenuBtn.classList.remove("opened");
  } else {
    menuList.classList.add("opened");
    burgerMenuBtn.classList.add("opened");
  }
}

function resize() {
  let menuList = document.querySelector(".menu-list");
  let burgerMenuBtn = document.querySelector(".hamburger-logo");
  if (menuList.classList.contains("opened")) {
    menuList.classList.remove("opened");
    burgerMenuBtn.classList.remove("opened");
  }
}

window.onresize = resize;

  let bigImg = document.getElementById("big");
  let subImg = document.getElementById("sub").getElementsByTagName("img");

  for (let i = 0; i < subImg.length; i++) {
    subImg[i].addEventListener("click", function () {
      let imgSrc = this.getAttribute("src");
      bigImg.innerHTML = "<img src=" + imgSrc + ">";
    });
  }



function handleLanguagesDropdownOpen() {
  let dropdown = document.querySelector(".dropdown")
  dropdown.classList.toggle("active")
}

function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}