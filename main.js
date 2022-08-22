let email = document.getElementById("email");
let message = document.querySelector('em');
let value = email.value;
function formValidation() {
  if (
    !value.match(
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    )
  ) {
    email.style.border = '1px solid var(--light-red)';
    message.style.display = 'block';
    return false;
  }

  alert("validations passed");
  return true;
}
