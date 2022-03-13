const arrowBtn = document.querySelector(".arrow");
const arrowIcon = document.querySelector(".fas");
const img = document.querySelector(".item1");

/*
1.nasłuchiwanie w celu kliknięcie starzłki
2.dodawanie klasy hide
3.obracanie strzałki w zależności czy klasa jest dodana 
*/

const showImg = () => {
  img.classList.toggle("hide");
  arrowIcon.classList.toggle("szczalka");
};

arrowBtn.addEventListener("click", showImg);
