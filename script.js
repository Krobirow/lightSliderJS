const btn_prev = document.querySelector('#gallery .buttons .prev'),
    btn_next = document.querySelector('#gallery .buttons .next'),
    images = document.querySelectorAll('.photos img');
let i = 0;

prev = () => {
    images[i].className = 'hided';
    i--;
    if( i < 0) {
        i = images.length - 1;
    }

    images[i].className = 'showed';
};

next = () => {
    images[i].className = 'hided';
    i++;

    if( i >= images.length) {
        i = 0;
    }

    images[i].className = 'showed';
};

btn_next.addEventListener('click', next);
btn_prev.addEventListener('click', prev);