export function newForm(method, action = '') {
  const form = document.createElement('form');

  form.method = method;
  form.action = action;

  return form;
}
