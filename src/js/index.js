import $ from "jquery";
window.$ = $;
window.jQuery = $;

import Glide from '@glidejs/glide'
import Vue from 'vue';
import ExampleComponent from '../vue-components/ExampleComponent.vue';
import { Slide } from 'vue-burger-menu';

import '../lib/slick/slick.min.js';

require('../lib/fancybox/jquery.fancybox.js');

Vue.component('example-component', ExampleComponent );
Vue.component('drawer-menu', Slide );

const vue_app = new Vue({
    el: '#app',
});

window.vue_app = vue_app;
window.Glide = Glide;


$(function() {
  $("#mobile-menu").show();
  //jQuery("body").css("color", "blue");
});
