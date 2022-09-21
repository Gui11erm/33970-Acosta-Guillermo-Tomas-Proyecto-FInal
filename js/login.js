const username = document.getElementById('username').value
const password = document.getElementById('password').value
const botonIngresar = document.getElementById('botonIngresar')

/* action="/operador/operador.html" */

/*consultamos la informacion de los usuarios en una funcion asincrona */
const consultarUsuarios = async() => {
    const response = await fetch('/json/users.json')
    const users = await response.json()
    console.log(users.username)
    return users
}

console.log(users)

botonIngresar.addEventListener('click', (e) =>{
    e.preventDefault()
    const username = document.getElementById('username').value
    const password = document.getElementById('password').value
    accederSistema(username, password)
})

function accederSistema() {
    consultarUsuarios().then(users => {
        
        if (username == users.username && password == users.password) {
            window.location.href = "/operador/operador.html"
            console.log("funciona")
        } else {
            alert("Datos ingresados incorrectos")
            console.log(users.username)
        }
    })
}

