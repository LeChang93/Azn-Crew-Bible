//selecting the DIV and selecting the pictures itself.
const carouselSlide = document.querySelector(".carousel-slide");
const carouselIMG = document.querySelectorAll(".carousel-slide img");

//buttons
const prevBTN = document.querySelector("#prevBtn");
const nextBTN = document.querySelector("#nextBtn");

//setting up the start of the page.
let counter = 0
const size = carouselIMG[0].clientWidth;
autoslide();

function autoslide() {
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter++;
  carouselSlide.style.transform = `translateX(${-size*counter}px)`;
  setTimeout(function() {
    autoslide();
  }, 10000);
}


//setting up the buttons.
prevBTN.addEventListener("click", function() {
  if (counter <= 0) {
    return
  }
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter--;
  carouselSlide.style.transform = `translateX(${-size*counter}px)`;

})

nextBTN.addEventListener("click", function() {
  if (counter >= carouselIMG.length - 1) {
    return
  }
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter++;
  carouselSlide.style.transform = `translateX(${-size*counter}px)`;
})

// becuase if we put this part with the button, it will only listen when the buttons are clicked.
carouselSlide.addEventListener("transitionend", function() {

  if (carouselIMG[counter].id === "lastphotocopy") {
    carouselSlide.style.transition = "none";
    counter = carouselIMG.length - 2;
    carouselSlide.style.transform = `translateX(${-size*counter}px)`;
  }

  if (carouselIMG[counter].id === "firstphotocopy") {
    carouselSlide.style.transition = "none";
    counter = 1;
    carouselSlide.style.transform = `translateX(${-size*counter}px)`;
  }
})

// this is the Amiantion of the title page.

const introTitle = document.querySelectorAll("p1")
const topText = introTitle[0].textContent.split("");
introTitle[0].textContent = " "
for (var i = 0; i < topText.length; i++) {
  introTitle[0].innerHTML = introTitle[0].innerHTML + "<span>" + topText[i] + "</span>"
}

bottomText = introTitle[1].textContent;
bottomTextSplit = bottomText.split("");
introTitle[1].innerHTML = ""
for (i = 0; i < bottomText.length; i++) {
  introTitle[1].innerHTML = introTitle[1].innerHTML + "<span>" + bottomTextSplit[i] + "</span>"
}

let char = 0;
let timer = setInterval(onTick, 100);


function onTick() {
  const span = document.querySelectorAll("span")[char];
  if (span.innerHTML === "A" || span.innerHTML === "C") {
    span.classList.add("animate2")
    char++
  } else {
    span.classList.add("animate");
    char++
  }
  if (char === (topText.length + bottomText.length)) {
    complete();
    return;
  }
}

function complete() {
  clearInterval(timer);
  timer = null;
}

setTimeout(function() {
  const button = document.querySelectorAll(".btn")
  for (i = 0; i < button.length; i++) {
    button[i].classList.add("btn2");
  }
}, 2000)

//This is the code to animate the Members Section

var acMembers = document.querySelectorAll(".picdiv");
var overlay = document.querySelectorAll(".overlay");

for (var i = 0; i < acMembers.length; i++) {
  acMembers[i].addEventListener("mouseover", function() {
    members = this.getAttribute("class")
    memberAnimation(members);
  });
}


function memberAnimation(divnames) {

  switch (divnames) {
    case "leondiv picdiv":
      acMembers[0].addEventListener("mouseout", function() {
        overlay[0].classList.remove("lcoverlay2");
      })
      overlay[0].classList.add("lcoverlay2")
      break;

    case "alicediv picdiv":
      acMembers[1].addEventListener("mouseout", function() {
        overlay[1].classList.remove("acoverlay2");
      })
      overlay[1].classList.add("acoverlay2")
      break;

    case "mikediv picdiv":
      acMembers[2].addEventListener("mouseout", function() {
        overlay[2].classList.remove("mtoverlay2");
      })
      overlay[2].classList.add("mtoverlay2")
      break;

    case "athadiv picdiv":
      acMembers[3].addEventListener("mouseout", function() {
        overlay[3].classList.remove("aeoverlay2");
      })
      overlay[3].classList.add("aeoverlay2")
      break;

    case "isaacdiv picdiv":
      acMembers[4].addEventListener("mouseout", function() {
        overlay[4].classList.remove("ipoverlay2");
      })
      overlay[4].classList.add("ipoverlay2")
      break;

    case "alexdiv picdiv":
      acMembers[5].addEventListener("mouseout", function() {
        overlay[5].classList.remove("ahoverlay2");
      })
      overlay[5].classList.add("ahoverlay2")
      break;

    case "chongdiv picdiv":
      acMembers[6].addEventListener("mouseout", function() {
        overlay[6].classList.remove("czoverlay2");
      })
      overlay[6].classList.add("czoverlay2")
      break;

    case "kerndiv picdiv":
      acMembers[7].addEventListener("mouseout", function() {
        overlay[7].classList.remove("kloverlay2");
      })
      overlay[7].classList.add("kloverlay2")
      break;

    case "essencediv picdiv":
      acMembers[8].addEventListener("mouseout", function() {
        overlay[8].classList.remove("etoverlay2");
      })
      overlay[8].classList.add("etoverlay2")
      break;
  }
}
