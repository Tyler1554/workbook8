//get html element
const yesButton = document.querySelector("#yes-button");
const noButton = document.querySelector("#no-button");

const urlParams = new URLSearchParams(location.search);

//write function

 function deleteUser() {
  let id = -1;
  if (urlParams.has("id")) {
    id = urlParams.get("id");
    fetch(`http://localhost:3000/users/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((user) => window.location.href = "users.html");
  }
};




yesButton.onclick = () => deleteUser(user.id) 