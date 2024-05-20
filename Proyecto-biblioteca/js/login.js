var users = new Map(JSON.parse(localStorage.getItem('users')) || []);
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
                Swal.fire({
                    icon: 'success',
                    title: '¡Éxito!',
                    text: 'Has iniciado sesión correctamente como usuario'
                }).then(() => {
                    window.location.href = 'listalibrosUser.html';
                });
            } else if (userData.rol === 'administrador') {
                Swal.fire({
                    icon: 'success',
                    title: '¡Éxito!',
                    text: 'Has iniciado sesión correctamente como administrador'
                }).then(() => {
                    window.location.href = 'listaLibrosAdmin.html';
                });
            }
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Contraseña incorrecta',
                text: 'La contraseña introducida es incorrecta.'
            });
        }
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Nombre de usuario incorrecto',
            text: 'El nombre de usuario introducido no existe.'
        });
    }
}

function register() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var email = document.getElementById('correo').value;
    var rol = 'usuario';

    if (username.length > 10) {
        Swal.fire({
            icon: 'error',
            title: 'Nombre de usuario inválido',
            text: 'El nombre de usuario debe tener menos de 10 caracteres.'
        });
        return;
    }

    var passwordPattern = /^(?=.*[A-Z])(?=.*[!@#$%^&*])/;
    if (!passwordPattern.test(password)) {
        Swal.fire({
            icon: 'error',
            title: 'Contraseña inválida',
            text: 'La contraseña debe tener al menos una letra mayúscula y un carácter especial como estos: !@#$%^&*.'
        });
        return;
    }

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        Swal.fire({
            icon: 'error',
            title: 'Correo electrónico inválido',
            text: 'Por favor, introduce una dirección de correo electrónico válida: example@example.com.'
        });
        return;
    }

    if (users.has(username)) {
        Swal.fire({
            icon: 'error',
            title: 'Usuario existente',
            text: 'El usuario ya existe. Por favor, elige otro nombre de usuario.'
        });
    } else {
        users.set(username, {rol: rol, password: password, email: email});
        localStorage.setItem('users', JSON.stringify(Array.from(users.entries())));
        Swal.fire({
            icon: 'success',
            title: 'Registro exitoso',
            text: 'Usuario registrado correctamente. Ahora puedes iniciar sesión.'
        }).then(() => {
            window.location.href = 'index.html';
        });
    }
}
