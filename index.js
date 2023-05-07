// import your function
import myName from './myName.js';

function component() {
  const element = document.createElement('div');

  // use your function!
  element.textContent = myName('Miage4Ever');
  return element;
}

document.body.appendChild(component());
