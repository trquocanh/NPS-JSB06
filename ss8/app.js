// Nhiệm vụ: in ra thông tin người dùng nhập

/**
 * Sử dụng addEventListener: để lắng nghe sự kiện xảy ra trên web.
 */

// lấy ra được thẻ form
const form = document.getElementById('register-form');
console.log(form);

// lắng nghe sự kiện submit trên form
form.addEventListener("submit", function (event) {
  event.preventDefault();
  // hàm  ngăn chặn sự kiện f5 mặc định của trình duyệt. => ko bị mất dữ liệu


  // tạo ra 1 đối tượng có tên là user:
  let user = {
    firstName: form.firstName.value.trim(),
    ///////////cha.con      . giá trị của con
    lastName: form.lastName.value.trim(),
    email: form.email.value.trim(),
    password: form.password.value.trim(),
    confirmPassword: form.confirmPassword.value.trim()

  }

  console.log(user);


  // xóa toàn bộ chuỗi đã nhập về rỗng (về ban đầu)
  form.firstName.value = "";
  form.lastName.value = "";
  form.email.value = "";
  form.password.value = "";
  form.confirmPassword.value = "";
});


// Hàm trim(): dùng để xóa dấu khoảng cách thừa ở hai bên trái và phải của string


const loginForm = document.getElementById('login-form')
console.log("hi");
console.log(loginForm);

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log("HI");
  const userInfor = {
    email: loginForm.email.value.trim(),
    password: loginForm.password.value.trim()
  }

  console.log(userInfor);
  loginForm.email.value = "";
  loginForm.password.value = "";

})



function toRegister() {
  // lấy ra thẻ span ở bên Login
  const toRegister = document.getElementById("toRegister");
  document.querySelector(".form-login").classList.add("displayNone");
  document.querySelector(".form-register").classList.remove("displayNone");
}

function toLogin() {
  // lấy ra thẻ span ở bên Register
  const toLogin = document.getElementById("toRegister");
  document.querySelector(".form-register").classList.add("displayNone");
  
  document.querySelector(".form-login").classList.remove("displayNone");
}