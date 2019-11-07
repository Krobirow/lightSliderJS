const btn_prev = document.querySelector('#gallery .buttons .prev'),
    btn_next = document.querySelector('#gallery .buttons .next'),
    images = document.querySelectorAll('#gallery .photos img');
let i = 0;

prev = () => {
    images[i].style.display = 'none';
    i--;

    if( i < 0) {
        i = images.length - 1;
    }

    images[i].style.display = 'block';
};

next = () => {
    images[i].style.display = 'none';
    i++;

    if( i >= images.length) {
        i = 0;
    }

    images[i].style.display = 'block';
};

btn_next.addEventListener('click', next);
btn_prev.addEventListener('click', prev);