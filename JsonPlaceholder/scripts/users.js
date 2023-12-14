//get html element
const usersTableBody = document.querySelector("#usersTableBody");
const yesButton = document.querySelector("#yes-button");
const deleteModal = document.querySelector("#exampleModal");
let messageDiv = document.querySelector("#message-div");

//write function

function getUser() {
  let users = fetch("http://localhost:3000/users");

  fetch("http://localhost:3000/users")
    .then((response) => response.json())
    .then((data) => {
      loadUsersTable(data);
    });
}

function loadUsersTable(users) {
  for (const user of users) {
    let row = usersTableBody.insertRow();

    let cell1 = row.insertCell();
    cell1.innerText = user.name;

    let cell2 = row.insertCell();
    cell2.innerText = user.username;

    let cell3 = row.insertCell();
    cell3.innerText = user.email;

    let cell4 = row.insertCell();
    cell4.innerText = user.id;

    let td8 = row.insertCell();
    let a1 = document.createElement("a");
    a1.innerText = "edit";
    a1.href = `edit-user.html?id=${user.id}`;
    td8.appendChild(a1);

    let td9 = row.insertCell();
    let deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.classList.add("btn", "btn-primary");
    deleteButton.textContent = "Delete";
    deleteButton.setAttribute("data-bs-toggle", "modal");
    deleteButton.setAttribute("data-bs-target", "#exampleModal");
    deleteButton.id = user.id;
    // deleteButton.addEventListener("click", () => modal(user.id));
    td9.appendChild(deleteButton);
  }
}
yesButton.addEventListener("click", () => deleteUser(users));

// turned id to user top bottom

function deleteUser(users) {
  // let id = -1;
  // if (urlParams.has("id")) {
  //   id = urlParams.get("id");
  fetch(`http://localhost:3000/users/${id}`, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then((user) => (window.location.href = "users.html"));
}

window.onload = function initialize() {
  let message = sessionStorage.getItem("message");
  if (message) {
    messageDiv.innerText = message;
  }
  setTimeout(function () {
    messageDiv.innerText = "";
    sessionStorage.removeItem("message");
  }, 4000);

  getUser();
};
