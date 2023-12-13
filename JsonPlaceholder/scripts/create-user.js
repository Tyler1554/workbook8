async function initialize() {
  let nameInput = document.querySelector("#name-input");
  let userNameInput = document.querySelector("#new-user-name-input");
  let emailInput = document.querySelector("#new-email-input");
  let submitNewUserButton = document.querySelector("#submit-new-user");

  function createUser() {
    let newName = nameInput.value;
    let newUserName = emailInput.value;
    let newUserCompany = userNameInput.value;
    const user = {
      name: `${newName}`,
      username: `${newUserName}`,
      email: `${newUserCompany}`,
    };

    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((responese) => responese.json())
      .then((user) => {
        window.location.href = "users.html";
      });
  }
  submitNewUserButton.onclick = createUser;
}

window.onload = initialize;
