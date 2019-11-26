// import _ from 'lodash';

function createElement() {
  const element = document.createElement('div');
  console.log('123');

  // element.insertAdjacentHTML('afterbegin', _.join(['Hello', 'webpack']));

  return element;

}

document.body.appendChild(createElement());
