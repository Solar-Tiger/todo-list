export function newBtn(nameOfButton = '', className) {
  const btn = document.createElement('button');

  btn.textContent = nameOfButton;

  if (className) {
    btn.classList.add(className);
  }

  return btn;
}
