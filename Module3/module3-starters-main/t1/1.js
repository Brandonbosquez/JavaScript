'use strict';

const ul = document.querySelector('#target');

const lista = `<li>First item</li>
              <li>Second item</li>
              <li>Third item</li`;

ul.innerHTML = lista;

ul.setAttribute('Class','my-list');