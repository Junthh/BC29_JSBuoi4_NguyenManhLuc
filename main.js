/*
Kiểu dữ liệu
boolean: true/ false
 */

var isStatus = false;

/*
Các loại toán tử

*/

// Phép so sánh (==) : So sánh giá trị
var number_1 = "5";
var number_2 = 5;

// var result_12 = number_1 == number_2;
console.log(number_1 == number_2);



// Phép so sánh (===) : So sánh giá trị và kiểu dữ liệu 
var number_3 = "10";
var number_4 = 10;

console.log(number_3 === number_4);



// Phép so sánh (!=)  : So sánh giá trị
var number_5 = 4;
var number_6 = 3;

console.log(number_5 != number_6);



// Phép so sánh (!==) : So sánh giá trị và kiểu dữ liệu
var number_7 = "3";
var number_8 = 3;

console.log(number_7 !== number_8);


// Phép so sánh (>) : So sánh giá trị
var number_9 = 5;
var number_10 = 3;

console.log(number_9 > number_10);



// Phép so sánh (>=) : So sánh giá trị
var number_11 = 1;
var number_12 = 3;

console.log(number_11 >= number_12);

/*
 Phép so sanh (<) bà (<=) 
 tương tự phép so sánh (>) và (>=) 
*/ 

/*
Logic

Toán tử (&&)
Nếu trong các biểu thức có 1 biểu thức fasle thì kết quả là false
Nếu tất các biểu thức đều true thì kết quả là true 

 */

var bt_1 = true;
var bt_2 = true;
var bt_3 = false;

console.log(bt_1 && bt_2 && bt_3);

console.log(5 < 2 && 10 > 1 && 4 != 1);



/*
Toán tử (||)

Nếu trong các biểu thức có 1 biểu thức true thì kết quả là true
Nếu tất các biểu thức đều fasle thì kết quả là false 

 */
var bt_4 = false;
var bt_5 = true;
var bt_6 = false;

console.log(bt_4 || bt_5 || bt_6);

console.log(5 < 2 || 10 > 1 || 4 != 1 && 1 > 10);
//         (T     ||    F  ) ||   ( T    &&   F   ) 


// Toán tử phủ định (!)
var isLoop = true;
console.log(!isLoop);




/**
 * Cấu trúc điều kiện
 * if
 * 
 */

if(1 == 1){
    // Hành động
    console.log("dk dung");
}



/**
 * Chuyển số âm sang dương
 * Giả sử: 
 * -5 => 5
 */

var d = -5;

if (d < 0) {
   d = -d
}

console.log(d);


/**
 * Thẻ tín dụng
 * Giả sử
 * - Mua đôi giày 10000
 * - Cuối tháng trả bank 5000
 * - Nợ bank 5000
 * - Tỷ lệ phạt 1.5%: 1.5/100 = 0.015
 * - Phạt: 5000 * 0.015 
 */

var muonBank = 10000;
var traBank = 5000;
var tienPhat = 0;
var balance = muonBank - traBank;

if(balance > 0){
    tienPhat = balance * 0.015
};

console.log("Bi phat: " + tienPhat);




/**
 * If else
 */

if(10 >5){
    // Hành động 1
    console.log("Hành động 1")
} else{
    // Hành động 2
    console.log("Hành động 2")
};

/** Toán tử 3 ngôi
 * Biểu thức đk ? "hd 1" : "hd 2"
 */

2> 5 ? console.log("hd 1") : console.log("hd 2");







/**
 * Tìm số lớn nhất trong 2 số
 * Giả sử:
 *        số thứ 1 = 10
 *        số thứ 2 = 5
 * => số lớn nhất : số thứ 1
 * 
 * - Đầu vào:
 * - SoThu1= 10
 * - SoThu2 = 5
 * - sln = 0;
 * 
 * - Xử lý:
 *  + nếu SoThu1 lớn hơn SoThu2 => sln là soThu1
 *  + Ngược lại sln là SoThu2
 * 
 * - Đầu ra: log sln
 */

var SoThu1 = 10;
var SoThu2 = 11;
var sln = 0;

if(SoThu1 > SoThu2){
    sln = SoThu1;
} else{
    sln = SoThu2;
};

console.log("Số lớn nhất: " + sln);


/**
 * Tín tiền lương
 * Giả sử:
 * 
 * - Đầu vào:
 *          - số giờ làm: 40
 *          - luong theo giờ: 100000
 *          - tổng lương = 0
 * 
 * - Xử lý:
 *          - nếu số giờ làm > 40
 *          - tổng lương = (40* lương theo giờ) + (số giờ làm - 40) * lương theo giờ * 1.5
 *          - ngược lại
 *          - tổng lương = số giờ làm * lương theo giờ
 * 
 * - Đầu ra: 
 *          - log ra tổng lương
 */


var soGioLam = 40;
var luongTheoGio = 100000
var tongLuong = 0;

if(soGioLam > 40){
    tongLuong = (40* luongTheoGio) + (soGioLam - 40) * luongTheoGio * 1.5;
}else{
    tongLuong = soGioLam * luongTheoGio;
};

console.log("Tổng lương: " + tongLuong);




/**
 * if else if 
 * - Giả sử: Dạy bé đọc số
 * - number = 1;
 * - nếu == 1
 *      => "Đây là số 1"
 * - ngược lại, nếu number == 2
 *      => "Đây là số 2"
 * - ngược lại, nêu == 3
 *      => "Đây là số 3"
 * - ngược lại:
 *      => "không biết đọc"
 */

var number = 33123;
if(number == 1){
    console.log("Day la so 1");
} else if(number == 2){
    console.log("Day la so 2");
} else if(number == 3){
    console.log("Day la so 3");
} else{
    console.log("be k biet doc")
};




/**
 * Đầu vào:
 *          - Tên: coca
 *          - số lượng: 10
 *          - đơn giá: 10000
 *          - tổng tiền: 0
 *          - tiền giảm: 0
 * 
 * Xử lý:
 *          - nếu mua < 50
 *              => tổng tiền = số lượng * giá
 *          - ngược lại, nếu mua từ 50 đến 100 giảm 8%
 *              => tiền giảm = số lượng * giá * 8%
 *              => tổng tiền = số lượng * giá - tiền giảm
 *          - ngược lại mua với số lượng từ 100 trở lên thì giảm 12%
 *              => tiền giảm = số lượng * giá * 12%
 *              => tổng tiền = số lượng * giá - tiền giảm
 */

var ten = "Coca"
var soLuong = 10;
var donGia = 10000
var tongTien = 0;
var tienGiam = 0;

if( 50 <= soLuong && soLuong < 100){
    tienGiam = soLuong * donGia * 8/100;
    tongTien = soLuong * donGia - tienGiam;
} else if(soLuong >= 100){
    tienGiam = soLuong * donGia * 12/100;
    tongTien = soLuong * donGia - tienGiam;
} else{
    tongTien = soLuong * donGia;
}

console.log("Tong tien: " + tongTien);