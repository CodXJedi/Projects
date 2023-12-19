const select = document.querySelector("#select").getElementsByTagName("option");
let final_out;

let box_in = document.querySelector(".box_in");

let color_arr = [];

function check() {
  let color = in_txt_1.value;
  let type = ``;
  let code = in_txt_3.value;
  let a = /[0-9]/.test(color);

  let prov_1 = false;

  if (color) {
    if (a == true) {
      document.getElementById("flex_1_out_1").style.color = "red";
      document.getElementById("in_txt_1").style.border = "2px solid red";
      flex_1_out_1.innerHTML = "Please use only numbers";
    } else {
      for (let r = 0; r < color_arr.length + 1; r++) {
        if (color_arr[r] == color) {
          prov_1 = true;
        }
      }
      if (prov_1 == true) {
        document.getElementById("flex_1_out_1").style.color = "red";
        document.getElementById("in_txt_1").style.border = "2px solid red";
        flex_1_out_1.innerHTML = "already used";
        return;
      }

      if (a == true) {
        document.getElementById("in_txt_1").style.border = "2px solid red";
        flex_1_out_1.innerHTML = "Please use only numbers";
      }
      let str = code;
      let target = ",";
      let pos = 0;
      let k = 0;
      while (true) {
        let foundPos = str.indexOf(target, pos);
        if (foundPos == -1) break;
        pos = foundPos + 1;
        k++;
      }
      console.log(k);

      for (let i = 0; i < select.length; i++) {
        if (select[i].selected == true) {
          if (i == 0) {
            if (k != 2) {
              return;
            }
          } else if (i == 1) {
            if (k != 3) {
              return;
            }
          } else if (i == 2) {
            if (k != 0) {
              alert("yes");
            }
          }
        }
      }

      if (k == 0) {
        let hex_0 = /^[a-f-A-F-0-9-#]+$/.test(code);
        if (hex_0 == true) {
          let len_hex = code.length;
          if (len_hex != 7) {
            return;
          } else {
            for (let i = 0; i < select.length; i++) {
              if (select[i].selected == true) {
                if (i == 2) {
                  type = "HEX";
                  code = `${code}`;
                } else {
                  return;
                }
              }
            }
            color_arr.push(color);
            final_out = `<div class="box" style="background-color: ${code};">
                            <div class="box_in"">
                                <div>${color}</div>
                                <div>${type}</div>
                                <div>${code}</div>
                            </div>
                            </div>`;
            box_in.style.backgroundColor = "white";
            box_colors.innerHTML = final_out;
          }
        } else {
          return;
        }
      }

      if (k == 2 || k == 3) {
        code = code + ",";
        k++;
        if (k > 4 || k == 0 || k < 3) {
          return;
        }
        let txt_main = code;
        for (let y = 0; y < k; y++) {
          let num_1 = code.search(",");
          let txt_1 = txt_main.substring(0, num_1);
          let prov_mes = /[a-z-A-Z]/.test(code);
          if (prov_mes == true) {
            return;
          }
          // console.log(txt_1)
          txt_main = txt_main.slice(num_1 + 1);
          console.log(txt_main);
          Number(txt_1);
          txt_1.trim();
          if (txt_1 > 255 || txt_1 < 0) {
            flex_1_out_2.innerHTML = "No";
            return;
          }
        }
        code = code.slice(0, -1);
        console.log(code);
      }

      for (let i = 0; i < select.length; i++) {
        if (select[i].selected == true) {
          if (i == 0) {
            type = "RGB";
            code = `rgb(${code})`;
          } else if (i == 1) {
            type = "RGBA";
            code = `rgba(${code})`;
          } else {
            return;
          }
        }
      }
      color_arr.push(color);
      final_out = `<div class="box" style="background-color: ${code};">
                <div class="box_in">
                    <div>${color}</div>
                    <div>${type}</div>
                    <div>${code}</div>
                </div>
            </div>`;
      box_colors.innerHTML = final_out;
    }
  } else {
    flex_1_out_1.innerHTML = "N";
  }
}

let obj = {
  width: [10, 20, 30, 40],
};

console.log(obj.width[0]);
