let nameInput = document.getElementById("name");
let emailInput = document.getElementById("email");
let horario = document.getElementById("horario");

let myForm = document.getElementById("my-form");
let usersList = document.getElementById("users");

myForm.addEventListener("submit", clicar);

function clicar(e) {
    e.preventDefault();
    //1. Cria um novo elemento HTML <li> em memória (ainda não visível na página);
    let itemli = document.createElement("li")
    //2. Prepara para inserir um elemento "filho" dentro da tag <li>
    itemli.appendChild(
        document.createTextNode(
            // 4. junta os valores digitados nos inputs usando templates literais
            `${nameInput.value} : ${emailInput.value} : ${horario.value}`
        )

    )


    usersList.appendChild(itemli);
}