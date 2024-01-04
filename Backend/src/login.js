async function login() {
    let emailElement = document.getElementById("usr_correo");
    let passwordElement = document.getElementById("usr_pwd");

    if (emailElement && passwordElement) {
        let usr_correo = emailElement.value;
        let usr_pwd = passwordElement.value; 
        try {
            const response = await fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ usr_correo:usr_correo, usr_pwd:usr_pwd }),
            });
            console.log(usr_correo ,"" ,usr_pwd);
            console.log("entra a try");

            if (response.ok) {
                const { token } = await response.json(); // Obtener el token de la respuesta
                // Guardar el token en el almacenamiento local o en una cookie
                // Redirigir al usuario a la página de correos después del inicio de sesión exitoso          
                console.log("HOLA");              
                alert('entro');
                window.location.href = "../inicio.html";
                localStorage.setItem('token', token);
            } else {
                console.error('Error al verificar el usuario:', response.statusText);
                alert('Error en login. Por favor, inténtalo de nuevo.');
            }
        } catch (error) {
            console.error('Error en la solicitud:', error);
            alert('Error en la solicitud. Por favor, inténtalo de nuevo.');
        }
    } else {
        console.error("No se encontraron elementos de entrada.");
    }
}

