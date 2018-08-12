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
};
document.addEventListener('DOMContentLoaded', fn, false);
