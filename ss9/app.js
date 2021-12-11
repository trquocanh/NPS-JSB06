const form = document.getElementById('register-form');
console.log(form);
form.addEventListener("submit", function (event) {
    event.preventDefault();
    let user = {
        firstName: form.firstName.value.trim(),
        lastName: form.lastName.value.trim(),
    email: form.email.value.trim(),
    password: form.password.value.trim(),
    confirmPassword: form.confirmPassword.value.trim()

  }

  console.log(user);
  form.Name.value = "";
  form.email.value = "";
  form.Website.value = "";
  form.Comment.value = "";
  
});
