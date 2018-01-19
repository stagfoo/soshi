var dom = require('bel').createElement
var vdom = require('virtual-dom');
var hyperx = require('hyperx')
// hyperx can use react!;

export function getRenderer(type){
    switch (type) {
      case 'vdom':
        return hyperx(vdom.h);
      default:
        return hyperx(dom);
    }
}
