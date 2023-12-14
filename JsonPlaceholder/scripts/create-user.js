async function initialize() {
  let nameInput = document.querySelector("#name-input");
  let userNameInput = document.querySelector("#new-user-name-input");
  let emailInput = document.querySelector("#new-email-input");
  let submitNewUserButton = document.querySelector("#submit-new-user");

  function createUser() {
    let newName = nameInput.value;
    let newUserName = userNameInput.value;
    let newEmail = emailInput.value;
    const user = {
      name: `${newName}`,
      username: `${newUserName}`,
      email: `${newEmail}`,
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
sessionStorage.setItem("message","Successfully added!")

window.onload = initialize;
