function ingresoEmail() {
  alert("Muchas gracias por suscribirse!!");
}

function comentarios() {
  alert(
    "Muchas gracias por su comentario y de ser necesario nos comunicaremos a la brevedad"
  );
}

function ingresoDeDatos() {
  let email = prompt("Ingresa tu email");
  if (email != "") {
    let contrasenia = prompt("Ingresa tu contraseña");
  } else {
    email = prompt("Ingresa tu email");
  }

  console.log(email);
  console.log(contrasenia);
}
