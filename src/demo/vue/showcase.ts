import Vue from 'vue/dist/vue'
import Soshi from '../../core';
import componentList from '../../components/componentList'
import Image from '../../components/Image/Image'
const Components = new Soshi({
  dom: 'vdom'
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

  render(h){
    console.log(h)
    //return Image({src:''}, h);
    //return h('img', {props: { src: ''}})
    return Components.r.image({src: '{{src}}' });
  }
});

export default VueShowcase;
