var fn = function() {
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

    var plus = document.getElementsByClassName('check');

    for (var i = 0; i < plus.length; i++) {
        var g = document.createElement('&#10004;');
        g.innerHTML = '&#10004;';
        plus[i].appendChild(g);
    }
};
document.addEventListener('DOMContentLoaded', fn, false);
