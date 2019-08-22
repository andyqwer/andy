var btn = document.querySelector('div.logo-top-box > i');
var header = document.querySelector('.header>header');
var change = false;
btn.onclick = function() {
  change = !change;
  if (change) {
    header.style.top = '50px';
    header.style.transition = 'top 1s';
  } else {
    header.style.top = '-205px';
    header.style.transition = 'top 1s';
  }
};
