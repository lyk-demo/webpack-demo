
async function getComponent() {

  var element = document.createElement('pre');
  const _ = await import( /* webpackChunkName: 'loadsh' */ 'lodash')

  element.innerHTML = _.join(['Hello', 'webpack'], '')
  
  return element;
}

getComponent().then(component => {
  document.body.appendChild(component);
})

