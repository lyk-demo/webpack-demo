import _ from 'lodash'
import Print from './print.js'

function component(params) {
  var element = document.createElement('div')

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.onclick = Print.bind(null, 'aHello webpack!');

  return element
}

document.body.appendChild(component())