import _ from 'lodash';

function createElement() {
  const element = document.createElement('div');

  element.insertAdjacentHTML('afterbegin', _.join(['Hello', 'webpack']));

  return element;

}

document.body.appendChild(createElement());
