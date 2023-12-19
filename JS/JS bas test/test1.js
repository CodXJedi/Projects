let kol = 0, otv = [], num = 1, s = 0, shet = 0
if (kol == 0) {
    img_main.innerHTML = '<img src="img/1.jpg" alt="">'
    vop.innerHTML = num + ') ' + 'Что означает слово "Австрия"'
    otv_1_in.innerHTML = 'Восточная Империя'
    //pr
    otv_2_in.innerHTML = 'Северное Царство'
    otv_3_in.innerHTML = 'Европейское Королевство'
    otv_4_in.innerHTML = 'Австрийская Республика'
    kol++
    num++
}
but1.onclick = function () {
    if (kol == 1) {
        img_main.innerHTML = '<img src="img/2.jpg" alt="">'
        vop.innerHTML = num + ') ' + 'Выберите столицу Австрии'
        otv_1_in.innerHTML = 'Мюнхен'
        otv_2_in.innerHTML = 'Берлин'
        otv_3_in.innerHTML = 'Зальцбург'
        otv_4_in.innerHTML = 'Вена'
        //pr
        if (otv_1.checked == true) {
            otv[s] = 'Верно'
            shet++
        }
        else {
            otv[s] = 'Не верно'
        }
        otv_1.checked = false
        otv_2.checked = false
        otv_3.checked = false
        otv_4.checked = false
    }
    if (kol == 2) {
        img_main.innerHTML = '<img src="img/3.jpg"alt="">'
        vop.innerHTML = num + ') ' + 'Сколько федеральных земель в Австрии?'
        otv_1_in.innerHTML = '3'
        otv_2_in.innerHTML = '15'
        otv_3_in.innerHTML = '9'
        //pr
        otv_4_in.innerHTML = '16'
        if (otv_4.checked == true) {
            otv[s] = 'Верно'
            shet++
        }
        else {
            otv[s] = 'Не верно'
        }
        otv_1.checked = false
        otv_2.checked = false
        otv_3.checked = false
        otv_4.checked = false
    }
    else if (kol == 3) {
        img_main.innerHTML = '<img src="img/4.jpg"alt="">'
        vop.innerHTML = num + ') ' + 'Выберите денежную единицу Австрии'
        otv_1_in.innerHTML = 'Евро'
        //pr
        otv_2_in.innerHTML = 'Немецкая марка'
        otv_3_in.innerHTML = 'Австрийский шиллинг'
        otv_4_in.innerHTML = 'Европейский рубль'
        if (otv_3.checked == true) {
            otv[s] = 'Верно'
            shet++
        }
        else {
            otv[s] = 'Не верно'
        }
        otv_1.checked = false
        otv_2.checked = false
        otv_3.checked = false
        otv_4.checked = false
    }
    else if (kol == 4) {
        img_main.innerHTML = '<img src="img/5.jpg"alt="">'
        vop.innerHTML = num + ') ' + 'Чем знаменит австрийский флаг?'
        otv_1_in.innerHTML = 'Это единственный флаг в мире, состоящий только из двух цветов'
        otv_2_in.innerHTML = 'Это один из старейших флагов мира'
        //pr
        otv_3_in.innerHTML = 'Австрия является уникальной страной, у которой три официальных флага'
        otv_4_in.innerHTML = 'Флаг Австрии ранее являлся флагом Финляндии'
        if (otv_1.checked == true) {
            otv[s] = 'Верно'
            shet++
        }
        else {
            otv[s] = 'Не верно'
        }
        otv_1.checked = false
        otv_2.checked = false
        otv_3.checked = false
        otv_4.checked = false
    }
    else if (kol == 5) {
        img_main.innerHTML = '<img src="img/6.jpg"alt="">'
        vop.innerHTML = num + ') ' + 'Выберите официальный язык Австрии?'
        otv_1_in.innerHTML = 'Австрийский'
        otv_2_in.innerHTML = 'Австралийский'
        otv_3_in.innerHTML = 'Немецкий'
        //pr
        otv_4_in.innerHTML = 'Эльфийский'
        if (otv_2.checked == true) {
            otv[s] = 'Верно'
            shet++
        }
        else {
            otv[s] = 'Не верно'
        }
        otv_1.checked = false
        otv_2.checked = false
        otv_3.checked = false
        otv_4.checked = false
    }
    else if (kol == 6) {
        img_main.innerHTML = '<img src="img/7.jpg"alt="">'
        vop.innerHTML = num + ') ' + 'Какая из перечисленных международных организаций не имеет представительства в Австрии?'
        otv_1_in.innerHTML = 'НАТО'
        //pr
        otv_2_in.innerHTML = 'МАГАТЭ'
        otv_3_in.innerHTML = 'ООН'
        otv_4_in.innerHTML = 'ОБСЕ'
        if (otv_3.checked == true) {
            otv[s] = 'Верно'
            shet++
        }
        else {
            otv[s] = 'Не верно'
        }
        otv_1.checked = false
        otv_2.checked = false
        otv_3.checked = false
        otv_4.checked = false
    }
    else if (kol == 7) {
        img_main.innerHTML = '<img src="img/8.jpg"alt="">'
        vop.innerHTML = num + ') ' + 'Большая часть территории современной Австрии покрыта горными массивами. На территории каких гор расположилась Австрия?'
        otv_1_in.innerHTML = 'Гималаи'
        otv_2_in.innerHTML = 'Апеннины'
        otv_3_in.innerHTML = 'Алтайские горы'
        otv_4_in.innerHTML = 'Альпы'
        //pv
        if (otv_1.checked == true) {
            otv[s] = 'Верно'
            shet++
        }
        else {
            otv[s] = 'Не верно'
        }
        otv_1.checked = false
        otv_2.checked = false
        otv_3.checked = false
        otv_4.checked = false
    }
    else if (kol == 8) {
        img_main.innerHTML = '<img src="img/9.jpg"alt="">'
        vop.innerHTML = num + ') ' + 'Какая из этих рек протекает в Вене?'
        otv_1_in.innerHTML = 'Десна'
        otv_2_in.innerHTML = 'Дунай'
        //pr
        otv_3_in.innerHTML = 'Одер'
        otv_4_in.innerHTML = 'Днепр'
        if (otv_4.checked == true) {
            otv[s] = 'Верно'
            shet++
        }
        else {
            otv[s] = 'Не верно'
        }
        otv_1.checked = false
        otv_2.checked = false
        otv_3.checked = false
        otv_4.checked = false
    }
    else if (kol == 9) {
        img_main.innerHTML = '<img src="img/10.jpg"alt="">'
        vop.innerHTML = num + ') ' + 'В Австрии расположено озеро, со всех сторон окружённое горами. Зимой глубина озера составляет 1-2 метра, а территория вокруг него служит парком. Но весной в горах начинает таять снег, питая озеро новой водой, и к маю его глубина увеличивается до 12 метров. Под поверхностью озера оказываются деревья, дорожки, скамейки, что в сочетании с кристально чистой водой делает его в это время популярным местом для дайвинга. Как называется это уникальное озеро?'
        otv_1_in.innerHTML = 'Грюнер'
        //pr
        otv_2_in.innerHTML = 'Боденское озеро'
        otv_3_in.innerHTML = 'Озеро Утренней Славы'
        otv_4_in.innerHTML = 'Мичиган'
        if (otv_2.checked == true) {
            otv[s] = 'Верно'
            shet++
        }
        else {
            otv[s] = 'Не верно'
        }
        otv_1.checked = false
        otv_2.checked = false
        otv_3.checked = false
        otv_4.checked = false
    }
    else if (kol == 10) {
        img_main.innerHTML = '<img src="img/fin.avif" alt="">'
        let i, otvet = [], k
        if (otv_1.checked == true) {
            otv[s] = 'Верно'
            shet++
        }
        else {
            otv[s] = 'Не верно'
        }
        otv_1.checked = false
        otv_2.checked = false
        otv_3.checked = false
        otv_4.checked = false
        for (i = 0; i < 10; i++) {
            k = i + 1
            otvet[i] = k + ') ' + otv[i] + '<br>'
        }
        vop.innerHTML = (otvet.join(''));
        del_1.innerHTML = shet + '/10' + ' Правильных';
        del_2.innerHTML = '';
        del_3.innerHTML = '';
        del_4.innerHTML = '';
        but1.value = 'Заново'
    }
    else if (kol == 11) {
        kol = 0
        num = 1
        s = -1
        shet = 0
        del_1.innerHTML = '<input type="radio" name="box" id="otv_1"><label for="otv_1" id="otv_1_in">';
        del_2.innerHTML = '<input type="radio" name="box" id="otv_2"><label for="otv_2" id="otv_2_in">';
        del_3.innerHTML = '<input type="radio" name="box" id="otv_3"><label for="otv_3" id="otv_3_in">';
        del_4.innerHTML = '<input type="radio" name="box" id="otv_4"><label for="otv_4" id="otv_4_in">';
        but1.value = "Ответить"
        img_main.innerHTML = '<img src="img/1.jpg" alt="">'
        vop.innerHTML = num + ') ' + 'В каком году Казахстан стал членом ООН?'
        otv_1_in.innerHTML = 'Восточная Империя'
        //pr
        otv_2_in.innerHTML = 'Северное Царство'
        otv_3_in.innerHTML = 'Европейское Королевство'
        otv_4_in.innerHTML = 'Австрийская Республика'
        if (otv_1.checked == true) {
            otv[s] = 'Верно'
            shet++
        }
        else {
            otv[s] = 'Не верно'
        }
        otv_1.checked = false
        otv_2.checked = false
        otv_3.checked = false
        otv_4.checked = false
    }
    kol++
    s++
    num++
}