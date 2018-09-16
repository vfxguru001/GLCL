var fn = function() {
    // adding p tag for minus
    var minus = document.getElementsByClassName('minus');

    for (var i = 0; i < minus.length; i++) {
        var e = document.createElement('p');
        e.innerHTML = '-';
        minus[i].appendChild(e);
    }

    //adding p tag for plus
    var plus = document.getElementsByClassName('plus');
    for (var i = 0; i < plus.length; i++) {
        var e = document.createElement('p');
        e.innerHTML = '+';
        plus[i].appendChild(e)
    }
};

document.addEventListener('DOMContentLoaded', fn, false);
