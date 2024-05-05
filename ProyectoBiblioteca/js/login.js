// Definir el mapa para almacenar los datos de usuario
var users = new Map();
users.set('Jaime', {password: 'root', rol: 'administrador'});
users.set('Alejandro', {password: 'root', rol: 'administrador'});
users.set('Pedro', {password: 'root', rol: 'administrador'});
users.set('usuario', {password: 'usuario', rol: 'usuario'});
// Puedes agregar más usuarios y contraseñas según sea necesario

// Función para iniciar sesión
function login() {
    var username = document.getElementById('username').value; // Antes era 'usuario', corregido a 'username'
    var password = document.getElementById('password').value;

    if (users.has(username)) {
        var userData = users.get(username);
        if (userData.password === password) {
            if (userData.rol === 'usuario') {
                // Inicio de sesión exitoso para usuario
                alert('Has iniciado sesión correctamente como usuario');
                // Redirigir a la página de acciones para usuario
                window.location.href = 'acciones_usuario.html';
            } else if (userData.rol === 'administrador') {
                // Inicio de sesión exitoso para administrador
                alert('Has iniciado sesión correctamente como administrador');
                // Redirigir a la página de acciones para administrador
                window.location.href = 'acciones_administrador.html';
            }
        } else {
            // Contraseña incorrecta
            alert('Contraseña incorrecta');
        }
    } else {
        // Usuario no encontrado
        alert('Nombre de usuario incorrecto');
    }
}
// Función para registrar un nuevo usuario
function register() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var rol = 'usuario'
    // Verificar si el usuario ya existe
    if (users.has(username)) {
        alert('El usuario ya existe. Por favor, elige otro nombre de usuario.');
    } else {
        // Agregar el nuevo usuario al mapa
        users.set(username, {rol: rol, password: password});
        alert('Usuario registrado correctamente. Ahora puedes iniciar sesión.');
        window.location.href = 'index.html'
    }
}