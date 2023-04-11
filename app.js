const input = document.querySelector('#buscar-frutas');
const select = document.querySelector('#frutas');

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

select.addEventListener('change', () => {
  input.value = select.value;
});


