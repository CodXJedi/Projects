let input__form = document.getElementsByClassName("input__form");
// console.log(input__form);
// let inputformfirst = input__form[0];
// console.log(inputformfirst);
console.log(input__form);
function isEmail() {
  let per = input__form[0].value;
  console.log(per);
  let form__one = /[a-z0-9_]+@[a-z0-9.-]+\.[a-z]{2,3}/.test(per);
  if (form__one == true) {
    alert("Clear");
  } else {
    alert("try again");
  }
}

// let obj__width = {
//   width: [10, 20, 30, 40],
//   color: ["red", "white"],
// };
// console.log(obj__width.color[0]);
// document.getElementById("reg").style.backgroundColor = obj__width.color[0];
