const nameField = document.querySelector("#name-field");
const userNameField = document.querySelector("#user-name-field");
const emailField = document.querySelector("#email-field");
const submitEditUser = document.querySelector("#submit-edited-user");
const urlParams = new URLSearchParams(location.search);

function fetchUser() {
  let id = 0;
  if (urlParams.has("id") === true) {
    id = urlParams.get("id");
    fetch(`http://localhost:3000/users/${id}`)
      .then((response) => response.json())
      .then((user) => {
        inputUserData(user);
      });
  }
}

function inputUserData(user) {
  nameField.innerText = user.name;
  userNameField.innerText = user.username;
  emailField.innerText = user.email;
}

window.init = inputUserData;