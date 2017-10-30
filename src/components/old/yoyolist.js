const yo = require('yo-yo');

function list(items) {
  return yo`<ul>
        ${items.map(item => yo`<li>${item}</li>`)}
        </ul>`;
}

module.exports = list;

// document.body.appendChild(el)
