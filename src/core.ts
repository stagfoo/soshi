const bel = require('bel');
var vdom = require('virtual-dom')
var hyperx = require('hyperx')
// hyperx can use react!;
var hx = hyperx(vdom.h);

function renderDom(template){
  return bel`${template}`;
}
function renderVdom(template){
  return hx`${template}`
}

function renderTemplate(type, template){
    switch (type) {
      case 'vdom':
        return renderVdom(template);
      default:
        return renderDom(template);
    }
}
