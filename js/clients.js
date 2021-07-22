const nick = document.getElementById("nick-input");
const email = document.getElementById("email-input");
const password = document.getElementById("password-input");
const saveButtonClient = document.getElementById("salvar-cliente");
let clientList = [];


function createClient() {
    clientList.push(
        JSON.stringify(
            {
                login: nick.value,
                email: email.value,
                password: password.value,
            }
        )
    )
    localStorage.setItem("Client", clientList);
  }

  saveButtonClient.addEventListener('click', createClient);

  window.onload = () => {
    clientList.push(localStorage.getItem('Client'));
  };