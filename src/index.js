import { _ } from './common.js';
import Vue from 'vue';
import { cube } from './math.js';

new Vue({
  el: '#bbb'
})

console.log('index s b d')

function component() {
  // -   var element = document.createElement('div');
  var element = document.createElement('pre');

  // -   // lodash 是由当前 script 脚本 import 导入进来的
  // -   element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.innerHTML = [
    'Hello webpack!',
    '5 cubed is equal to ' +  cube(5)
  ].join('\n\n');

  return element;
}

document.body.appendChild(component());