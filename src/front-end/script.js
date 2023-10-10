const cadastrar = document.querySelector("#cadastrar");

cadastrar.addEventListener("click", (event) => {
    event.preventDefault;
    const registration = document.querySelector("#registration").value;
    const name = document.querySelector("#name").value;

    fetch("http://localhost:3000/pessoas", {
        method: "POST",
        headers: {
            "Accept": "application/json",
            'Content-Type': 'application/json',

        },
        body: JSON.stringify({
            "registration": registration,
            "name": name
        })
    })
    .then((response)=>{
        console.log(response);
    })
})