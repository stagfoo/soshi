import Vue from 'vue/dist/vue'
import Soshi from '../../core';
import componentList from '../../components/componentList'
const Components = new Soshi({
  dom: 'plaintext'
});

Components.load(componentList);
function VueShowcase() {

var app = new Vue({
    el: '#vue-showcase',
    data: {
          message: 'Hello Vue!'
        }
})


}
Vue.component('soshi-img', {
  template: `${Components.r.image({src: '{{src}}' })}`,
  props: ['src']
});

export default VueShowcase;
