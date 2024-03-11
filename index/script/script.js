function tweak() {
  const main = document.querySelector('main');
  const nav = document.querySelector('nav');

  if (window.innerWidth >= 800) {
    main.classList.remove('small-screen');
    main.classList.add('big-screen');

    nav.classList.remove('background-small-screen');
    nav.classList.add('background-big-screen');
  }

  if (window.innerWidth < 800) {
    main.classList.add('small-screen');
    main.classList.remove('big-screen');

    nav.classList.add('background-small-screen');
    nav.classList.remove('background-big-screen');
  }
}

tweak()

window.addEventListener('resize', tweak);
