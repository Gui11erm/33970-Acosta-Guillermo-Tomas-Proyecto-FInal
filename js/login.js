/* 
    ESTE APARTADO SIMULA UN INGRESO DE USUARIO

    PARA PODER INGRESAR A LA PAGINA PRINCIPAL
    SE DEBE INGRESAR EL USUARIO Y CONTRASEÑA
    EXISTENTE EN LA BASE DE DATOS

    SOLO UN PERSONAL INTERNO PUEDE REGISTRAR UN NUEVO USUARIO,
    YA QUE SE SIMULA UN PAGINA DE TRABAJO INTERNO

    SI NO SE INGRESA EL USUARIO CORRESPONDIENTE
    NO PODRA INGRESAR (/json/users.json)

    usuarios y contraseña
    username = tacosta
    password = 1234

*/


const username = document.getElementById('username').value
const password = document.getElementById('password').value
const botonIngresar = document.getElementById('botonIngresar')

/*consultamos la informacion de los usuarios en una funcion asincrona */
const consultarUsuarios = async() => {
    const response = await fetch('/json/users.json')
    const users = await response.json()
    return users;
}

/* tomamos los datos de los input */
botonIngresar.addEventListener('click', (e) =>{
    e.preventDefault()
    const username = document.getElementById('username').value
    const password = document.getElementById('password').value
    accederSistema(username, password)
})

function accederSistema(username, password) {
    /* booleano que utilizamos para confirmar si los datos es correcto el usuario o son erroneos */
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

        if(ingreso != true ){
            Swal.fire({
                icon: 'error',
                title: 'Datos Incorrectos',
                text: 'Ingrese un usuario y contraseña correctos.'
              })
        }
    })

    console.log(username, password, ingreso)

}

