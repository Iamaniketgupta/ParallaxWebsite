//On scrolling effect
window.addEventListener('scroll', function () {
 
    const scrollY = window.scrollY;

    const grass = document.querySelector('.grass');
    grass.style.transform = 'translateZ(' + scrollY * 0.1 + 'px)';


    const treesL = document.querySelector('.trees-l');
    treesL.style.transform = 'translateZ(' + scrollY * 0.2 + 'px)';

    const treesR = document.querySelector('.trees-r');
    treesR.style.transform = 'translateZ(' + scrollY * 0.2 + 'px)';

    const headText = document.querySelector('.p1-heading');
    headText.style.transform = 'translateY(' + scrollY * (0.5) + 'px)';

});





