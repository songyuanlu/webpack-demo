import { _ } from './common.js';
import Vue from 'vue';

console.log(
  _.join(['Another', 'module', 'loaded!'], ' ')
);

new Vue({
  el: '#aaa'
})