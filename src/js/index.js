import jQuery from "jquery";
import Vue from 'vue';
import ExampleComponent from '../vue-components/ExampleComponent.vue';

Vue.component('example-component', ExampleComponent );

const vue_app = new Vue({
    el: '#app',
});

window.vue_app = vue_app;

jQuery(function() {
  //jQuery("body").css("color", "blue");
});
