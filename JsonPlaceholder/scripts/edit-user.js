const nameField = document.querySelector("#name-field");
const userNameField = document.querySelector("#user-name-field");
const emailField = document.querySelector("#email-field");
const submitEditUser = document.querySelector("#submit-edited-user");
const urlParams = new URLSearchParams(location.search);


  function loadUser() {
    let id = -1;
    if (urlParams.has("id") === true) {
      id = urlParams.get("id");
      fetch(`http://localhost:3000/users/${id}`)
        .then((response) => response.json())
        .then((user) => {
          nameField.value = user.name;
          userNameField.value = user.username;
          emailField.value = user.email;
        });
    }
  }

  function editUser() {
    let editedName = nameField.value;
    let editedUserName = userNameField.value;
    let editedEmail = emailField.value;
    const editeduser = {
      name: `${editedName}`,
      username: `${editedUserName}`,
      email: `${editedEmail}`
    };
    let id = urlParams.get("id");
    fetch(`http://localhost:3000/users/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editeduser),
    })
    .then((responese) => responese.json())
    .then((user) => {
      window.location.href = "users.html"
    });
    }
    
    window.onload = loadUser;
    submitEditUser.onclick = editUser;
