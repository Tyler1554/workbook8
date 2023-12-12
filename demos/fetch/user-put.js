const user = {
    name: "Lizzo Be Eating",
    username: "thereallizzo", 
    email: "lizzo2245@gmail.com",
};

fetch("http://localhost:3000/users", {
    method: "PUT",
    headers: {
        "Content-Type":"application/json"},
    body: JSON.stringify(user),
   })
   .then((responese)=> responese.json())
   .then((user)=>{
    console.log(user);
});