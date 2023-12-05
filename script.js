function mostrarContrasena() {
  var inputContrasena = document.getElementById("contrasena");
  var eyeIcon = document.querySelector(".eye-icon");

  if (inputContrasena.type === "password") {
      inputContrasena.type = "text";
      eyeIcon.textContent = "👀"; // Cambia el ícono a un ojo abierto
  } else {
      inputContrasena.type = "password";
      eyeIcon.textContent = "👁️"; // Cambia el ícono a un ojo cerrado
  }
}

  function submitForm() {
    var form = document.getElementById("registrationForm");
    if (form.checkValidity()) {
      // Aquí se puede implementar la lógica para enviar datos al servidor Node.js
      alert("Formulario enviado con éxito");
    } else {
      alert("Por favor, complete todos los campos correctamente.");
    }
  }
  