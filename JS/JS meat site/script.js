class Product {
  constructor(productPhoto, productName, productCen, productCol, productSum) {
    this.photo = productPhoto;
    this.name = productName;
    this.cen = productCen;
    this.col = productCol;
    this.sum = productSum;
  }
  print() {
    let otv = `${this.photo} <br><br> ${this.name} <br><br>${this.col} шт. х ${this.cen} = ${this.sum} тенге`;
    return otv;
  }
  all_print() {
    let otv = ` шт = ${this.sum} тенге`;
    return otv;
  }
}

/*Главный Массив */
let arr_prod = [];

///////////////////////////////////////////////////////
let prov = false;
let main__korz = document.getElementById("main__korz");
let center = document.querySelector(".center");
console.log(center);
function Switch1() {
  main__korz.style.display = "block";
  center.style.filter = "blur(10px)";
}
function Switch2() {
  main__korz.style.display = "none";
  center.style.filter = "none";
}

let count = 1;
let minkorz_quantity = document.getElementById("min-korz__quantity");
function Count() {
  minkorz_quantity.innerHTML = count;
  count++;
}

let mid__korz = document.getElementById("mid__korz");
console.log(mid__korz);
let mid__korzsum = document.getElementById("mid__korz-sum");
function putItem(photo, name, cen, btn, btna) {
  let dop = false;
  let num = 1;
  let obj__sum;
  // let razm = arr_prod.length;
  // console.log(razm);
  let vrem_Obj = new Product(" ", " ", " ", 0, 0);
  for (let i = 0; i < arr_prod.length; i++) {
    let vrem_arr = arr_prod[i];
    if (vrem_arr.name == name) {
      alert("Ваш товар увеличен");
      dop = true;

      vrem_arr.col++;
      vrem_arr.sum = vrem_arr.col * vrem_arr.cen;

      arr_prod[i] = vrem_arr;
    }
  }
  if (dop == false) {
    alert("Товар добавлен!");
    vrem_Obj.photo = photo;
    vrem_Obj.name = name;
    vrem_Obj.cen = cen;
    vrem_Obj.btn = btn;
    vrem_Obj.col = 1;
    vrem_Obj.btna = btna;
    vrem_Obj.sum = vrem_Obj.col * vrem_Obj.cen;

    arr_prod.push(vrem_Obj);
  }
  let res = ``;
  for (let i = 0; i < arr_prod.length; i++) {
    res = res + num + ")" + " " + arr_prod[i].print() + "<br>" + "<br>";
    num++;
  }
  mid__korz.innerHTML = res;

  let sum1 = 0;
  for (let i = 0; i < arr_prod.length; i++) {
    let per2, sum;
    per2 = arr_prod[i];
    sum = per2.sum;
    sum1 = sum1 + sum;
  }
  mid__korzsum.innerHTML = `Общая стоимость : ${sum1} тенге <br><br>`;
}

// let btnclear = document.getElementById("inner-top__btnclear");
function Clear() {
  let vrem__arr;
  let razm = arr_prod.length;
  for (let i = 0; i < razm; i++) {
    arr_prod.pop(i);
  }
  count = 1;
  minkorz_quantity.innerHTML = 0;
  mid__korzsum.innerHTML = ``;
  mid__korz.innerHTML = `Здесь нет товаров!`;
  alert("Корзина очищена!");
}
