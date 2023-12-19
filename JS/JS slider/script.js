fradio.checked = true;
let offset = 0;
let inner__mainslider = document.querySelector(".inner__mainslider");
let box_img = document.querySelector(".box_img");
// console.log(box_img);

let all = document.getElementById("all");
console.log(all);

function myRight() {
  offset += 1422;
  if (offset > 4266) {
    offset = 0;
  }
  inner__mainslider.style.left = -offset + "px";
  myRadio();
  myRighttwo();
  mytxtRight();
}

function myLeft() {
  offset -= 1422;
  if (offset < 0) {
    offset = 4266;
  }
  inner__mainslider.style.left = -offset + "px";
  myRadio();
  myLefttwo();
  mytxtLeft();
}

let offset2 = 0;
function myRighttwo() {
  offset2 += 890;
  if (offset2 > 2670) {
    offset2 = 0;
  }
  box_img.style.left = -offset2 + "px";
  myRadio();
}
function myLefttwo() {
  offset2 -= 890;
  if (offset2 < 0) {
    offset2 = 2670;
  }
  box_img.style.left = -offset2 + "px";
  myRadio();
}

let offset3 = 0;
function mytxtRight() {
  offset3 += 138;
  if (offset3 > 414) {
    offset3 = 0;
  }
  all.style.left = -offset3 + "px";
}
function mytxtLeft() {
  offset3 -= 138;
  if (offset3 < 0) {
    offset3 = 414;
  }
  all.style.left = -offset3 + "px";
  // myRadio();
}

// box_img.onmousemove = function (ev) {
//   // console.log(ev.y, ev.x);
//   if (ev.y < 300) {
//     //<200 = top left
//     console.log("hi");
//   }
//   // console.log(ev.offsetY)
//   // if (event.offsetY > 500) {
//   //   console.log(event.offsetY);
//   // }
// };

function myRadio() {
  if (offset == 0 && offset2 == 0) {
    fradio.checked = true;
  } else if (offset == 1422 && offset2 == 890) {
    sradio.checked = true;
  } else if (offset == 2844 && offset2 == 1780) {
    tradio.checked = true;
  } else if (offset == 4266 && offset2 == 2670) {
    foradio.checked = true;
  }
}

function RadioB() {
  if (fradio.checked == true) {
    offset = 0;
    offset2 = 0;
    offset3 = 0;
    inner__mainslider.style.left = offset + "px";
    box_img.style.left = offset2 + "px";
    all.style.left = offset3 + "px";
  } else if (sradio.checked == true) {
    offset = 1422;
    offset2 = 890;
    offset3 = 138;
    inner__mainslider.style.left = -offset + "px";
    box_img.style.left = -offset2 + "px";
    all.style.left = -offset3 + "px";
  } else if (tradio.checked == true) {
    offset = 2844;
    offset2 = 1780;
    offset3 = 276;
    inner__mainslider.style.left = -offset + "px";
    box_img.style.left = -offset2 + "px";
    all.style.left = -offset3 + "px";
  } else if (foradio.checked == true) {
    offset = 4266;
    offset2 = 2670;
    offset3 = 414;
    inner__mainslider.style.left = -offset + "px";
    box_img.style.left = -offset2 + "px";
    all.style.left = -offset3 + "px";
  }
}

// left.onmousemove = function () {
//   box_img.style.boxShadow = "-15px -16px 8px 0px rgba(34, 60, 80, 0.46)";
// };
