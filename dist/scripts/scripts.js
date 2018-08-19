'use strict';

var list = [];
var myFunkyFunk = function myFunkyFunk() {
  console.log('the funk');
};
'use strict';

var fn = function fn() {
    var minus = document.getElementsByClassName('minus');

    for (var i = 0; i < minus.length; i++) {
        var e = document.createElement('p');
        e.innerHTML = '-';
        minus[i].appendChild(e);
    }

    var plus = document.getElementsByClassName('plus');

    for (var i = 0; i < plus.length; i++) {
        var f = document.createElement('p');
        f.innerHTML = '+';
        plus[i].appendChild(f);
    }

    /*var check = document.getElementsByClassName('check');
      for (var i = 0; i < check.length; i++) {
        var g = document.createElement('i');
        g.innerHTML = 'myCheck';
        g.classList.add('fas fa-check');
        check[i].appendChild(g);
    }*/
};
document.addEventListener('DOMContentLoaded', fn, false);