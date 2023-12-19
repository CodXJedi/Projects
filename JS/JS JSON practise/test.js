let a, b, c;
let input = document.getElementsByTagName("input");
console.log(input);
function Go() {
  let obj = {
    Sex: "",
    Age: "",
    Style: "",
  };

  if (man.checked == true) {
    obj.Sex = "Man";
  } else if (woman.checked == true) {
    obj.Sex = "Woman";
  } else {
    alert("Выберите пункты");
    return false;
  }
  if (child.checked == true) {
    obj.Age = "Child";
  } else if (adult.checked == true) {
    obj.Age = "Adult";
  } else if (old.checked == true) {
    obj.Age = "Old";
  } else {
    alert("Выберите пункты");
    return false;
  }
  if (sport.checked == true) {
    obj.Style = "Sport";
  } else if (Business.checked == true) {
    obj.Style = "Business";
  } else if (allday.checked == true) {
    obj.Style = "Normal";
  } else {
    alert("Выберите пункты");
    return false;
  }
  console.log(obj);
  obj = JSON.stringify(obj);
  window.open("test2.html?&" + obj);
}
