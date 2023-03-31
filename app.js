const input = document.querySelector('#buscar-frutas');

input.addEventListener('input', () => {
  const value = input.value.toLowerCase();
  const opciones = document.querySelectorAll('#opciones-frutas option');

  opciones.forEach((opcion) => {
    if (opcion.value.toLowerCase().includes(value)) {
      opcion.hidden = false;
    } else {
      opcion.hidden = true;
    }
  });
});

