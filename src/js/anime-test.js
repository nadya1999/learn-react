import anime from 'animejs/lib/anime.es.js';
var elements = document.getElementById('block');

let blockMove = anime({
  targets: elements,
  translateX: 250,
  translateY: 100,
  autoplay: false,
  backgroundColor: '#912900',
  duration: 2000,
  direction: 'alternate',
  scale: {
    value: 2,
    duration: 1600,
    easing: 'easeInOutQuart'
  },
  rotate: '1turn'
});



document.getElementById('butn').onclick = blockMove.restart;


