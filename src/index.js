import { cube } from './math.js'

function component() {
  var element = document.createElement('pre');

  element.innerHTML = [
    'Hello webpack',
    'S cubed is equsal to ' + cube(5)
  ].join('\n\n')

  return element;
}

let element = component()

document.body.appendChild(element);
