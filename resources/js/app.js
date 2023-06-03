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

    setTimeout(function() {
        let welcome = document.querySelector('.welcome')
        welcome.classList.add('opaced');
      }, 1000);

    setTimeout(function() {
        document.querySelector('.waviy').classList.add('loaded');
      }, 2100);

    setTimeout(function() {
       const aboutMe = document.querySelector('.about-me');
       aboutMe.classList.toggle('opacity-0');
       aboutMe.style.scale = '1';
      }, 5000);
  });

  let button = document.querySelector('.about-me');
  button.addEventListener('click', function() {
    const svgElement = document.getElementById('my-svg');
    svgElement.classList.add('reverse-animated');
    svgElement.classList.remove('animated');
    const mainContent = document.getElementById('main-content');
    mainContent.classList.add('fade');

    setTimeout(function() {
       mainContent.classList.add('d-none');
       let background = document.querySelector('.background')
       background.classList.add('d-none');
      }, 4000);
  })
