const select = document.querySelector('#frutas');
const input = document.querySelector('#buscar-frutas');

input.addEventListener('input', () => {
  const value = input.value.toLowerCase();
  const options = select.options;

  for (let i = 0; i < options.length; i++) {
    const option = options[i];

    if (option.value.toLowerCase().includes(value)) {
      option.hidden = false;
    } else {
      option.hidden = true;
    }
  }
});
