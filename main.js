/** 
 * Bài 1
 * 
 * Đầu vào:
 *      - Nhập SoThu1
 *      - Nhập SoThu2
 *      - nhập SoThu3
 * Xử lý:
 *  nếu SoThu1 > SoThu2
        nếu SoThu2 > SoThu3
          log ra  SoThu3 < SoThu2 < SoThu1
        hoặc nếu SoThu1 > SoThu3
          log  SoThu2 < SoThu3 < SoThu1
        hoặc
          log  SoThu2 < SoThu1 < SoThu3
        };
    hoặc nếu SoThu2 > SoThu3
        nếu SoThu1 > SoThu3
          log  SoThu3 < SoThu1 < SoThu2
        hoặc
          log  SoThu1 < SoThu3 < SoThu2
    hoặc
       log  SoThu1 < SoThu2 < SoThu3

 * Đầu ra:
    log số nguyên tăng dần
 */

document.getElementById("btnXep").onclick = function () {
    var a = document.getElementById("so1").value * 1;
    var b = document.getElementById("so2").value * 1;
    var c = document.getElementById("so3").value * 1;

    if (a > b) {
        if (b > c) {
            var textSS = c + "<" + b + "<" + a;
        } else if (a > c) {
            var textSS = b + "<" + c + "<" + a;
        } else {
            var textSS = b + "<" + a + "<" + c;
        };
    } else if (b > c) {
        if (a > c) {
            var textSS = c + "<" + a + "<" + b;
        } else {
            var textSS = a + "<" + c + "<" + b;
        };
    } else {
        var textSS = a + "<" + b + "<" + c;
    };

    document.getElementById("show_1").innerHTML = textSS;
};


/**
 * Bài 2
 * 
 * Đầu vào:
 *      Chọn thành viên
 * 
 * Xử lý:
 *  nếu gd == 1
        var loiChao = "Xin chào bố"
    hoặc nếu gd == 2
        var loiChao = "Xin chào mẹ"
    hoặc nếu gd == 3
        var loiChao = "Xin chào anh trai"
    hoặc nếu gd == 4
        var loiChao = "Xin chào em gái"
    hoặc
        var loiChao = "nothing"

 * Đầu ra:
    log ra câu chào của thành viên đã chọn
 */

document.getElementById("btnChao").onclick = function () {
    var gd = document.getElementById("chonTV").value;
    if (gd == 1) {
        var loiChao = "Xin chào bố";
    } else if (gd == 2) {
        var loiChao = "Xin chào mẹ";
    } else if (gd == 3) {
        var loiChao = "Xin chào anh trai";
    } else if (gd == 4) {
        var loiChao = "Xin chào em gái";
    } else {
        var loiChao = "nothing";
    };

    document.getElementById("show_2").innerHTML = loiChao;
};

/**
 * Bài 3
 * 
 * Đầu vào:
 *      var even = 0;
 *      var odd = 0
 *      Nhập soThu1
 *      Nhập soThu2
 *      Nhập soThu3

 * Xử lý:
 *      nếu number1 % 2 == 0
            even++
        hoặc
            odd++

 *      nếu number2 % 2 == 0
            even++
        hoặc
            odd++

 *      nếu number3 % 2 == 0
            even++
        hoặc
            odd++

 * Đầu ra:
        log có bao nhiêu số chẵn và bao nhiêu số lẻ
 */

document.getElementById("btnXuat").onclick = function () {
    var number1 = document.getElementById("num1").value;
    var number2 = document.getElementById("num2").value;
    var number3 = document.getElementById("num3").value;
    var even = 0;
    var odd = 0;

    if (number1 % 2 == 0) {
        even++;
    } else {
        odd++;
    };

    if (number2 % 2 == 0) {
        even++;
    } else {
        odd++;
    };

    if (number3 % 2 == 0) {
        even++;
    } else {
        odd++;
    };

    document.getElementById("show_3").innerHTML = "Có " + even + " số chẵn" + " và " + odd + " số lẻ";
};


/**
 * Bài 4
 * 
 * Đầu vào:
 *      Nhập canh1
 *      Nhập canh2
 *      Nhập canh3
 *      var hinhTamGiac
 * Xử lý:
 *  nếu canh1 == canh2 và canh1 == canh3
        nếu canh2 == canh3
            hinhTamGiac = Tam giác đêu
    ngược lại nếu canh1 == canh2 hoặc canh1 == canh3 hoặc canh2 == canh3
                nếu canh2 != canh3 hoặc canh3 != canh1
                hinhTamGiac = Tam giác cân
    ngược lại nếu canh1*canh1 == canh2*canh2 + canh3*canh3 hoặc canh2*canh2 == canh1*canh1 + canh3*canh3 hoặc canh3*canh3 == canh1*canh1 + canh2*canh2
        hinhTamGiac = Tam giác vuông
    ngược lại
        hinhTamGiac = Tam giác khác
 * Đầu ra:
        log hinhTamGiac
 */

document.getElementById("btnDoan").onclick = function () {
    var d = document.getElementById("bord_1").value*1;
    var e = document.getElementById("bord_2").value*1;
    var f = document.getElementById("bord_3").value*1;
    var hinhTamGiac;


    if (d == e && d == f) {
        if (e == f) {
            hinhTamGiac = "Tam giác đêu";
        };
    } else if(d == e || d == f || e == f){
        if(e != f || f != d){
            hinhTamGiac = "Tam giác cân"
        };
    } else if(d*d == e*e +f*f || e*e == d*d + f*f || f*f == d*d + e*e){
        hinhTamGiac = "Tam giác vuông";
    } else{
        hinhTamGiac = "Tam giác khác";
    };


    document.getElementById("show_4").innerHTML = hinhTamGiac;
};