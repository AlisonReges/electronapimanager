const pessoa = document.querySelector("#pessoa");


pessoa.addEventListener("click", async () => {
    const tela = await loadHTML("main", "pessoa.html");
    tela.addEventListener("load", ()=>{
        const btn = document.querySelector("#add")
        console.log(btn)
    })
})


function loadHTML(id, filename) {
    let xhttp;
    let element = document.getElementById(id)
;
    let file = filename;

    if (file) {

        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4) {
                if (this.status == 200) { element.innerHTML = this.responseText; }
                if (this.status == 404) { element.innerHTML = "<h1>Page not found.</h1>"; }
            }
        }
        xhttp.open("GET", `template/${file}`, true);
        xhttp.send();
        return xhttp;
    }

}