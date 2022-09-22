const username = document.getElementById('username').value
const password = document.getElementById('password').value
const botonIngresar = document.getElementById('botonIngresar')

/* action="/operador/operador.html" */

/*consultamos la informacion de los usuarios en una funcion asincrona */
const consultarUsuarios = async() => {
    const response = await fetch('/json/users.json')
    const users = await response.json()
    console.log(users)
    alertaError(true)
    return users;
}

botonIngresar.addEventListener('click', (e) =>{
    e.preventDefault()
    const username = document.getElementById('username').value
    const password = document.getElementById('password').value
    accederSistema(username, password)
})

function alertaError(ocultar) {alerta.style.display = "block";
    const alerta = document.getElementById("alertaUsuario");
    if(ocultar == true){
        alerta.style.display = "none";
    } else {
        alerta.style.display = "block";
    }
}

function accederSistema(username, password) {
    let ingreso = false

    /* esto es asincronico */
    consultarUsuarios().then(users => {
    
        users.forEach(element => {
            if (username == element.username && password == element.password) {
                window.location.href = "/operador/operador.html"
                console.log("funciona")
                ingreso = true
                console.log(ingreso)
                return
            }
        });

        if(ingreso == false ){
            
        } else {
            alertaError(false)
        }
        console.log(ingreso)
    })

    console.log(username, password, ingreso)

}

