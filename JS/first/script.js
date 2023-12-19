// first switch
//header
let header = document.querySelector("header"),
  header_button = document.querySelector(".header_button"),
  header__link = document.querySelectorAll("#header__link"),
  a = document.querySelector("a"),
  sectionh2 = document.querySelector(".header_h > h2:first-child"),
  headerfp = document.querySelector(".header_fp"),
  headersp = document.querySelector(".header_sp");
headerbottom = document.querySelector(".header_bottom");
//header
//city of love
let CityofLovep = document.querySelector(".col > div > p"),
  CityofLoveh2 = document.querySelector(".col > div > h2:first-child");
//
let Desth2 = document.querySelector(".dest1 > h2:first-child"),
  Destp = document.querySelector(".dest1 > p"),
  Dest = document.querySelector(".dest");


let dop = false;
function Switch() {
  if (dop == true) {
    dop = false;
    //header
    header.style.backgroundImage = "url(./image/header_bg.jpg)";
    header.style.minHeight = "700px";
    header.style.backgroundSize = "100% 100%";
    header.style.backgroundRepeat = "no-repeat";
    //
    //logo
    a.style.color = "white";
    //
    //btn--check
    header_button.style.backgroundColor = "rgba(230, 230, 98, 0.938)";
    header_button.style.cursor = "pointer";
    //header__link
    for (let elem of header__link) {
      elem.style.color = "white";
    }
    //
    //header-h2
    sectionh2.style.color = "white";
    //
    //header-p
    headerfp.style.color = "white";
    headersp.style.color = "white";
    //
    CityofLoveh2.style.color = "#26b19e";
    CityofLovep.style.color = "#777";
    //
    //destination
    Dest.style.backgroundColor = "#bfe6e756";
    Desth2.style.color = "#26b19e";
    Destp.style.color = "#777";
  } else if (dop == false) {
    dop = true;
    //header/style
    header.style.backgroundImage = "url(./image/dark-bg1.jpg)";
    header.style.width = "100%";
    header.style.minHeight = "700px";
    header.style.backgroundSize = "100% 100%";
    header.style.backgroundRepeat = "no-repeat";
    // logo
    a.style.color = "rgb(80, 19, 19)";
    //
    //btn--check
    header_button.style.backgroundColor = "rgba(32, 122, 92, 0.938)";
    header_button.style.cursor = "pointer";
    //
    //header__link
    for (let elem of header__link) {
      elem.style.color = "rgb(80, 19, 19)";
    }
    //
    // header-h2
    sectionh2.style.color = "rgb(80, 19, 19)";
    //
    //header-p
    headerfp.style.color = "#26b19e";
    headersp.style.color = "#26b19e";
    //
    headerbottom.style.backgroundColor = "beige";

    //mid//style
    // cityoflove
    CityofLoveh2.style.color = "rgb(80, 19, 19)";
    CityofLovep.style.color = "#26b19e";
    //
    //destination
    Dest.style.backgroundColor = "#00729a";
    Desth2.style.color = "rgb(80, 19, 19)";
    Destp.style.color = "#26b19e";
    //
    //
  }
}
