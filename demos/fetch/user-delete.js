
fetch("http://localhost:3000/users/16", {
    method: "DELETE"})
    .then((responese)=> responese.json())
    .then((user)=>{
    console.log(user)
});

 