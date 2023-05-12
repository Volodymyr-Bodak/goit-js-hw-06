const form  = document.querySelector('form.login-form');
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Всі поля мають бути заповненими(=");
  }
  console.log(`Email: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
}
