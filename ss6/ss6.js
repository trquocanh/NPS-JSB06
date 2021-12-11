// // // console.log("SS6.js onload");

// // let firstName = "Hiếu";
// // let surName = "Trung";
// // let lastName = "Nguyễn";

// // console.log(lastName, surName, firstName);

// // bài 1 done


// // Bài 2: lấy ra được số dư của phép chia: Ta sử dụng toán tử %
// // console.log(4 % 3); // => in ra số dư của phép chia 4/3


// // Bài 3;

// let x = "Hello World!";
// console.log(x.length); // in ra độ dài chuỗi



////////////////////////SS6
/**
 * Bài 01:
 * a) in ra các số lẻ từ 1-10 (dùng while)
 * 1. In ra các số từ 1-10
 * 2. Xét điều kiện nếu là số lẻ thì mới được in.
 * 3. Ko phải phải số lẻ thì thôi.
 *
 *
 * b) in ra các số chẵn từ 1-10  (dùng do-while)
 *
 */
// xong ý a)
// let i = 1;
// while (i <= 10) { // Điều kiện để dừng vòng lặp.
//   // Câu lệnh xét xem i có phai là số lẻ hay ko, có => in ra
//   if (i % 2 != 0) {
//     console.log(i);
//   }

//   i = i + 1; // là tăng i lên 1 đơn vị
// }

// giá trị i hiện tại là: 11 (i=11)


// ý b) in ra số chăn
// console.log("in ra số chăn");
// i = 1; // ==> i giá trị về lại là 1;
// do {
//   if (i % 2 === 0) { // dùng 2 dấu bằng liền 
//     console.log(i);
//   }

//   i = i + 1; // là tăng i lên 1 đơn vị
// }
// while (i <= 10);



// let monAn0 = "thịt chó"
// let monAn1 = "cá nướng"
// let monAn2 = "đậu lướt ván"

////// Array: Mảng và kiểu dữ liệu mảng

// khai báo 1 mảng;
// let arr = ["thịt chó", "cá nướng", "đậu lướt ván"];
// biến arr với giá trị hiện có là 1 mảng;

// NS ==>
// + Mảng arr hiện có 3 phần tử trong mảng
// + Mảng arr hiện tại đang chứa là: 3 giá trị chuỗi (String)

// in ra mảng arr
// console.log(arr);

////////// Tiếp tục với mảng arr hiện có 3 phần tử ban đầu
// Thêm mới 1  phần tử vào cuối mảng = phương thức .push();
// arr.push("mắm tôm");
// console.log(arr);


// Update 1 phần tử trong mảng:
/**
 *  Để update 1 phần tử trong mảng,
 * ta phải lấy ra được vị trí của phần tử đó trong mảng
 *
 * Để lấy được giá trị của 1 phần tử trong mảng ta sử dụng cú pháp:
 * arr[x] || Với x là vị trí hiện tại của phần tử đó
 */
// arr[0] = "thịt mèo"
// console.log("mảng sau khi update là:", arr);


/// Delete 1 phần tử trong mảng: 
/**
 * Ta phải biêt được vị trí phần tử muốn Delete
 * Sử dụng cú pháp: 
 * arr.splice(x,y):  
 * x: là vị trí phần tử:
 * y: là số phần tử các em muốn xóa kể từ vị trí đó (tính cả chính nó)
 */

// arr.splice(2, 1);
// console.log("mảng sau khi Delete là:", arr);



/**
 * Bài 1: Cho người dùng Nhập vào n, với n là số phần tử của mảng có tên: menu
 * a) Nhập vào từng đó n món ăn vào mảng menu
 * b) Hiển thị Phương án C,R,U,D cho người dùng.
 * để người dùng có thể trực tiếp thao tác với mảng thông qua cách nhập C,R,U,D
 * c) Nếu người dùng ko nhập C,R,U,D => thoát khỏi chương trình.
 */

 let n = prompt("Người dùng nhập vào số món ăn muốn lưu");
 n = Number(n);
 let menu = [];
 let i = 1
 do {
   let x = prompt(`Mời người dùng nhập vào món ăn thứ ${i}`);
   menu.push(x);
   i = i + 1;
 }
 while (i <= n);
 
 
 
 console.log("Menu món ăn hiện tại là", menu);
 let input;
 
 do {
   input = prompt("Mời người dùng nhập vào C,R,U,D");
   if (input == 'c') { // tại đây kiểm tra input == c hay ko
     menu.push(prompt("Mời người dùng nhập món ăn muốn thêm"));
     console.log("Menu món ăn sau khi thêm là:", menu);
   }
   else if (input == 'r') {
     console.log("Menu món ăn được in ra là:", menu);
   }
   else if (input == 'u') {
     // tìm được vị tri của phần tử muốn update
     let viTriUpdate = menu.indexOf(prompt("người dùng nhập món muốn update"))
     menu[viTriUpdate] = prompt("Người dùng nhập món ăn mới thay thế món cũ:")
     console.log("Menu món ăn sau khi update là:", menu);
   }
   else if (input == 'd') {
     let viTriDelete = menu.indexOf(prompt("người dùng nhập món muốn Delete"));
     menu.splice(viTriDelete, 1);
     console.log("Menu món ăn sau khi delete là:", menu);
   }
   else {
     alert("Không tồn lại lựa chọn => thoát vòng lặp");
   }
 }
 while (input == 'c' || input == 'r' || input == 'u' || input == 'd');
 