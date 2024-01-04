// Obtener elementos del formulario
const loginForm = document.getElementById('loginForm');
const emailElement = document.getElementById('usr_correo');
const passwordElement = document.getElementById('usr_pwd');

const usr_nombre = "Camily";
const usr_apellido = "Bravo";

function login(event) {
    event.preventDefault(); // Evitar el envío del formulario

    const usr_correo = emailElement.value;
    console.log(usr_correo);
    const usr_pwd = passwordElement.value;
    console.log(usr_pwd);
    
    const mockUser = { email: 'madecando@gmail.com', password: '123456' };

    if (usr_correo === mockUser.email && usr_pwd === mockUser.password) {
        console.log("Entra al if");
        localStorage.setItem('isLoggegln', 'true');
        localStorage.setItem('usr_correo', usr_correo);
        localStorage.setItem('usr_pwd', usr_pwd);
        localStorage.setItem('usr_nombre', usr_nombre);
        localStorage.setItem('usr_apellido', usr_apellido);
        window.location.href = './inicio.html';
    } else {
        alert('Credenciales incorrectas. Por favor, inténtalo de nuevo.');
    }
}

loginForm.addEventListener('submit', login);

