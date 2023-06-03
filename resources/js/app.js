import './bootstrap';
import '~resources/scss/app.scss';
import * as bootstrap from 'bootstrap';
import.meta.glob([
    '../img/**'
])

document.addEventListener('DOMContentLoaded', function() {
    const svgElement = document.getElementById('my-svg');
    svgElement.classList.add('animated');
    const titleElement = document.getElementById('title');
    titleElement.classList.add('start');
  });
