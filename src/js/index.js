import $ from "jquery";
import Glide from '@glidejs/glide'

import Vue from 'vue';
import ExampleComponent from '../vue-components/ExampleComponent.vue';

import '../lib/slick/slick.min.js';



Vue.component('example-component', ExampleComponent );


const vue_app = new Vue({
    el: '#app',
});

window.vue_app = vue_app;
window.Glide = Glide;
window.$ = $;
$(function() {
  //jQuery("body").css("color", "blue");
});
