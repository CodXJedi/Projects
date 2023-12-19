// Function play MUSIC
const soundCloud = document.querySelector(".sound-cloud");
const off = document.querySelector("#off");
const on = document.querySelector("#on");
const myAudio = document.querySelector("#myAudio");

off.onclick = () => soundTrack("off");
on.onclick = () => soundTrack("on");

const soundTrack = (soundState) => {
  if (soundState === "off") {
    on.style.display = "block";
    off.style.display = "none";
    soundCloud.style.color = "#08fdd8";
    myAudio.play();
  } else if (soundState === "on") {
    on.style.display = "none";
    off.style.display = "block";
    soundCloud.style.color = "#f50057";
    myAudio.pause();
  }
};

// play music funk end

// function show aside section
const btnBars = document.querySelector(".bars");
const btnTimes = document.querySelector(".times");
const sideNav = document.querySelector(".aside");

btnBars.onclick = () => myFunc("open");
btnTimes.onclick = () => myFunc("close");

const myFunc = (navCondition) => {
  $("header").removeClass("vision-header");
  if (navCondition === "open") {
    sideNav.classList.add("show-nav");
    btnTimes.style.display = "block";
    btnBars.style.display = "none";
  } else if (navCondition === "close") {
    sideNav.classList.remove("show-nav");
    btnTimes.style.display = "none";
    btnBars.style.display = "block";
  }
};
// function show aside section ends

// aside right function change theme
const asideRight = document.querySelector(".aside-right");
$(".fa-cog").on("click", function () {
  asideRight.classList.toggle("aside-right-open");
});
$(".fa-window-close").on("click", function () {
  asideRight.classList.toggle("aside-right-open");
});

const sectionHome = document.getElementById("section-home");
const body = document.querySelector("body");

$(".light-page").on("click", function () {
  if (!body.classList.contains("white")) {
    body.classList.add("white");
    $(".fa-window-close").addClass("fa-window-close-white");
    //cloudTag
    $(document).ready(function () {
      if (
        !$("#myCanvas").tagcanvas(
          {
            textColour: "black",
            outlineColour: "transparent",
            reverse: false,
            depth: 0.8,
            maxSpeed: 0.05,
            weight: false,
          },
          "tags"
        )
      ) {
        //something went wrong hide the canvas cont,
        $("#myCanvasContainer");
      }
    });
  }
});
$(".dark-page").on("click", function () {
  if (body.classList.contains("white")) {
    body.classList.remove("white");
    $(".fa-window-close").removeClass("fa-window-close-white");
    // cloudTag
    $(document).ready(function () {
      if (
        !$("#myCanvas").tagcanvas(
          {
            textColour: "#08fdd8",
            outlineColour: "transparent",
            reverse: false,
            depth: 0.8,
            maxSpeed: 0.05,
            weight: false,
          },
          "tags"
        )
      ) {
        //something went wrong hide the canvas cont,
        $("#myCanvasContainer");
      }
    });
  }
});
// change Theme ENds
// change h1 color
let chgcol = document.querySelectorAll(".aside-color-change");
console.log(chgcol);
for (let i = 0; i < chgcol.length; i++) {
  chgcol[i].onclick = function changeColor() {
    let color1 = this.getAttribute("data-color");
    $(".text-zone").css("color", color1);
    $("h2").css("color", color1);
    $(".post-articles").css({
      "background-color": "#1d1d1d",
      color: color1,
    });
    $(".blog-post-title h5 a").css("color", color1);
    $("body").css("color", color1);
    $(".logo-section").css("color", color1);
    $(".logo span").css("color", color1);
    $(".nav-links a").css("color", color1);
    $(".text-zone .gray-text").css("color", color1);
    $(".contact-button").css("color", color1);
    $(".contact-button span.base").css("border", "1px solid " + color1);
  };
}
// change H1 ends
// section 1 end

// cloudTag
$(document).ready(function () {
  if (
    !$("#myCanvas").tagcanvas(
      {
        textColour: "#08fdd8",
        outlineColour: "transparent",
        reverse: false,
        depth: 0.8,
        maxSpeed: 0.05,
        weight: false,
      },
      "tags"
    )
  ) {
    //something went wrong hide the canvas cont,
    $("#myCanvasContainer");
  }
});

// contact section FOrm
const nameInput = document.querySelector(".name");
const emailInput = document.querySelector(".email");
const subjectInput = document.querySelector(".subject");
const textareaInput = document.querySelector(".textarea");

const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  validateInput();
});

const validateInput = () => {
  let email = emailInput.value;
  let textarea = textareaInput.value;

  if (!email && !textarea) {
    setError(emailInput.parentElement);
    setError(textareaInput.parentElement);
    showMessage("Please field in the required inputs");
  } else if (!email && textarea) {
    setError(emailInput.parentElement);
    showMessage("Oopss Email can't be empty");
  } else if (!textarea && email) {
    setError(textareaInput.parentElement);
    showMessage("Please provide a message");
  } else if (email && textarea) {
    emailjs.sendForm(
      "service_ep7i0vo",
      "template_hhp1xwm",
      contactForm,
      "NYpT_5241cv3wXsA8"
    );
    setSucces(emailInput.parentElement);
    setSucces(textareaInput.parentElement);
    showMessage("Message send succesfully", "green");
    textareaInput.value = "";
    emailInput.value = "";
    nameInput.value = "";
    subjectInput.value = "";
  }
};

const setError = (input) => {
  if (input.classList.contains("success")) {
    input.classList.remove("success");
  } else {
    input.classList.add("error");
  }
};
const setSucces = (input) => {
  if (input.classList.contains("error")) {
    input.classList.remove("error");
  } else {
    input.classList.add("success");
  }
};

const messageDiv = document.querySelector(".message");
const showMessage = (message, updateColor) => {
  const divContent = document.createElement("div");
  divContent.textContent = message;
  divContent.classList.add("message-content");
  divContent.style.backgroundColor = updateColor;
  messageDiv.prepend(divContent);

  messageDiv.style.transform = `translate(${(0, 0)}%)`;
  setTimeout(() => {
    divContent.classList.add("hide");
    divContent.addEventListener("transition", () => {
      divContent.remove();
    });
  }, 5000);
};
// contact section FOrm ends

// animation text h2
document.querySelectorAll(".blast").forEach((el) => {
  el.addEventListener("mouseenter", function () {
    el.classList.add("rubberBand", "animated");
    setTimeout(() => {
      el.classList.remove("rubberBand", "animated");
    }, 1000);
  });
});

// scrollFunk
if (window.innerHeight + window.scrollY > document.body.clientHeight) {
  document.getElementById("section-work").style.display = "none";
} else {
  document.getElementById("section-work").style.display = "block";
}

// aside click funk
let i = 0;
function move() {
  if (i == 0) {
    i = 1;
    let elem = document.getElementById("myBar");
    let width = 1;
    let id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}

function Link(link) {
  $("header").addClass("vision-header");
  $(".section-home").hide();
  $("#section-about").hide();
  $("#section-work").hide();
  $(".fake-magicwall").hide();
  $("#section-blog").hide();
  $(".contact-section").hide();
  $(".myProgress").css("display", "block");
  $("header").css("opacity", "0");
  move();
  sideNav.classList.remove("show-nav");
  btnTimes.style.display = "none";
  btnBars.style.display = "block";
  setTimeout(() => {
    if (link == "About") {
      $("#section-about").show();
      $("#section-about").css("height", "100vh");
      $("header").css("opacity", "1");
      $(".myProgress").css("display", "none");
    } else if (link == "Myskills") {
      $("#section-work").show();
      $(".fake-magicwall").show();
      $("header").css("opacity", "1");
      $(".myProgress").css("display", "none");
    } else if (link == "Work") {
      $("#section-work").show();
      $(".fake-magicwall").show();
      $("header").css("opacity", "1");
      $(".myProgress").css("display", "none");
    } else if (link == "Contact") {
      $(".contact-section").show();
      $("header").css("opacity", "1");
      $(".myProgress").css("display", "none");
    } else if (link == "Blog") {
      $("#section-blog").show();
      $("header").css("opacity", "1");
      $(".myProgress").css("display", "none");
    } else if ((link = "refresh")) {
      window.location.reload();
    }
  }, 1200);
}
// sectionHome.classList.add("section-home-white");
// sideNav.classList.add("aside-white-theme");
// asideRight.classList.add("aside-right-white");
// text
// $(".text-zone").css("color", "#191919");
// $("h2").css("color", "#191919");
// $(".post-articles").css({
//   "background-color": "#E6E4E2",
//   color: "#191919",
// });
// $(".blog-post-title h5 a").css("color", "black");

// icons theme
// $(".fa-cog").css("color", "#191919");
// $(".light-page").css("border", "solid 1px rgb(207, 177, 7)");
// $(".fa-sun").css("color", "rgb(207, 177, 7)");
// $(".dark-page").css("border", "");
// $(".fa-moon").css("color", "");

// sideNav.classList.remove("aside-white-theme");
// sectionHome.classList.remove("section-home-white");
// asideRight.classList.remove("aside-right-white");
// // text
// $(".text-zone").css("color", "white");
// $("h2").css("color", "#08fdd8");
// $(".post-articles").css({
//   "background-color": "#1d1d1d",
//   color: "#909096",
// });
// $(".blog-post-title h5 a").css("color", "white");
// // icons theme
// $(".fa-cog").css("color", "white");

// $(".light-page").css("border", "");
// $(".fa-sun").css("color", "");
// $(".dark-page").css("border", "solid 1px #000066");
// $(".fa-moon").css("color", "#000066");
