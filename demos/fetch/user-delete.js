
fetch("http://localhost:3000/users/#ofuser", {
    method: "DELETE"})
    .then((responese)=> responese.json())
    .then((user)=>{
    console.log(user)
});