//get html element
const yesButton = document.getElementById("yes-button");
const noButton = document.getElementById("no-button");

const urlParams = new URLSearchParams(location.search);

//write function

function initialize() {
  let id = -1;
  if (urlParams.has("id") === true) {
    id = urlParams.get("id");
    fetch(`"http://localhost:3000/users/"${id}`, {
      method: "DELETE",
    })
      .then((response) => window.location.href = "users.html")
     
  }
}

yesButton.onclick = initialize;

