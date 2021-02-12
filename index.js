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
function autoslide () {
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter++;
  carouselSlide.style.transform = `translateX(${-size*counter}px)`;
  setTimeout(function(){
    autoslide();
},10000);}


//setting up the buttons.
prevBTN.addEventListener("click",function(){
  if(counter<=0){
    return
  }
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter--;
  carouselSlide.style.transform = `translateX(${-size*counter}px)`;

})

nextBTN.addEventListener("click",function(){
  if(counter >= carouselIMG.length -1){
    return
  }
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter++;
  carouselSlide.style.transform = `translateX(${-size*counter}px)`;
})

// becuase if we put this part with the button, it will only listen when the buttons are clicked.
carouselSlide.addEventListener("transitionend",function(){

  if(carouselIMG[counter].id === "lastphotocopy"){
    carouselSlide.style.transition = "none";
    counter = carouselIMG.length - 2;
    carouselSlide.style.transform = `translateX(${-size*counter}px)`;
  }

if(carouselIMG[counter].id === "firstphotocopy"){
  carouselSlide.style.transition = "none";
  counter = 1;
  carouselSlide.style.transform = `translateX(${-size*counter}px)`;
}})

// this is the Amiantion of the title page.
const introTitle = document.querySelectorAll("p1")
const topText = introTitle[0].textContent.split("");
introTitle[0].textContent = " "
for (var i = 0; i < topText.length ; i++){
  introTitle[0].innerHTML = introTitle[0].innerHTML + "<span>" + topText[i] + "</span>"
}

bottomText = introTitle[1].textContent;
bottomTextSplit = bottomText.split("");
introTitle[1].innerHTML = ""
for (i = 0 ; i < bottomText.length ; i ++){
  introTitle[1].innerHTML = introTitle[1].innerHTML + "<span>" + bottomTextSplit[i] + "</span>"
}

let char = 0;
let timer = setInterval(onTick, 100);


function onTick(){
  const span = document.querySelectorAll("span")[char];
  console.log(span.innerHTML);
    if(span.innerHTML === "A" || span.innerHTML ===  "C"){
      span.classList.add("animate2")
      char++
    }else {  span.classList.add("animate");
      char++}
  if(char===(topText.length + bottomText.length)){
    console.log(char);
    complete();
    return;
  }
}
function complete(){
  clearInterval(timer);
  timer=null;
}
