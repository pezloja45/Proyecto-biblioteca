var users = new Map();
users.set('Jaime', {password: 'root', rol: 'administrador'});
users.set('Alejandro', {password: 'root', rol: 'administrador'});
users.set('Pedro', {password: 'root', rol: 'administrador'});
users.set('usuario', {password: 'usuario', rol: 'usuario'});

function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (users.has(username)) {
        var userData = users.get(username);
        if (userData.password === password) {
            if (userData.rol === 'usuario') {
                alert('Has iniciado sesión correctamente como usuario');
                window.location.href = 'acciones_usuario.html';
            } else if (userData.rol === 'administrador') {
                alert('Has iniciado sesión correctamente como administrador');
                window.location.href = 'listaLibrosAdmin.html';
            }
        } else {
            alert('Contraseña incorrecta');
        }
    } else {
        alert('Nombre de usuario incorrecto');
    }
}
function register() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var rol = 'usuario'
    if (users.has(username)) {
        alert('El usuario ya existe. Por favor, elige otro nombre de usuario.');
    } else {
        users.set(username, {rol: rol, password: password});
        alert('Usuario registrado correctamente. Ahora puedes iniciar sesión.');
        window.location.href = 'index.html'
    }
}
