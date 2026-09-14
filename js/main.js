function cargarPagina(pagina) {
  //alert(pagina);
  fetch('pages/' + pagina)
    .then(response => {
      if (!response.ok) {
        throw new Error('Error al cargar la página');
      }
      return response.text();
    })
    .then(data => {
      document.getElementById('contenido').innerHTML = data;
     
    })
    .catch(error => {
      document.getElementById('contenido').innerHTML =
        "<p>Error cargando el contenido</p>";
      console.error(error);
    });

}

document.addEventListener("DOMContentLoaded" , function () {

  const paginaGuardada = localStorage.getItem("paginaActual");
  if(paginaGuardada) {
    cargarPagina(paginaGuardada);
  } else {
    cargarPagina("inicio.html");
  }
});

document.addEventListener("DOMContentLoaded", () => {

    const loginScreen = document.getElementById("loginScreen");
    const appContent = document.getElementById("appContent");

    const nombreGuardado = localStorage.getItem("nombreUsuario");

    if (nombreGuardado) {

        loginScreen.style.display = "none";
        appContent.style.display = "block";

    }

});
// LOGIN
document.getElementById("formLogin").addEventListener("submit", function(e) {

  e.preventDefault();

  const nombre = document.getElementById("inputNombre").value.trim();

  const regex = /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/;

  if(nombre === "" || !regex.test(nombre)) {

    alert("Ingrese un nombre válido");
    const alertContainer = document.getElementById("alertContainer");

  alertContainer.innerHTML = `
    <div class="alert alert-danger alert-dismissible fade show" role="alert">
      Ingrese un nombre válido
      <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    </div>
  `;

  // Ocultar automáticamente
  setTimeout(() => {
    alertContainer.innerHTML = "";
  }, 3000);

  }else{

    document.getElementById("nombre").innerHTML =
    "Hola, " + nombre;

  // Guardar nombre
  localStorage.setItem("nombreUsuario", nombre);

  // Ocultar login
  document.getElementById("loginScreen").style.display = "none";

  // Mostrar app
  document.getElementById("appContent").style.display = "block";
  }

});
