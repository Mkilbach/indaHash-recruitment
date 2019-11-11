import '../scss/main.scss'

import Glide from '@glidejs/glide';

new Glide('.glide', {
    gap: 0,
    keyboard: false,
    swipeThreshold: false,
    dragThreshold: false
}).mount();