document.addEventListener('DOMContentLoaded', function () {
  var menuButton = document.querySelector('.menu-button');
  var nav = document.querySelector('.site-nav');
  if (menuButton && nav) {
    menuButton.addEventListener('click', function () {
      var opened = nav.classList.toggle('open');
      menuButton.setAttribute('aria-expanded', opened ? 'true' : 'false');
    });
  }

  var logoSlider = document.querySelector('.client-logo-carousel');
  if (logoSlider) {
    setInterval(function () {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      if (logoSlider.matches(':hover') || logoSlider.matches(':focus')) return;
      logoSlider.scrollLeft = logoSlider.scrollLeft + 1;
      if (logoSlider.scrollLeft >= logoSlider.scrollWidth / 2) {
        logoSlider.scrollLeft = 0;
      }
    }, 25);
  }

  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  var filters = document.querySelectorAll('.filter-button');
  var cards = document.querySelectorAll('.portfolio-card');
  filters.forEach(function (button) {
    button.addEventListener('click', function () {
      var selected = button.getAttribute('data-filter');
      filters.forEach(function (item) {
        item.classList.remove('active');
        item.setAttribute('aria-pressed', 'false');
      });
      button.classList.add('active');
      button.setAttribute('aria-pressed', 'true');
      cards.forEach(function (card) {
        card.hidden = selected !== 'all' && card.getAttribute('data-category') !== selected;
      });
    });
  });

  var form = document.getElementById('booking-form');
  var message = document.getElementById('form-error');
  if (form) {
    form.addEventListener('submit', function (event) {
      var phone = document.getElementById('phone').value;
      var digits = phone.replace(/[^0-9]/g, '');
      if (digits.length < 7 || digits.length > 15) {
        event.preventDefault();
        message.textContent = 'Please enter a valid telephone number with at least 7 digits.';
        message.hidden = false;
        document.getElementById('phone').focus();
        return;
      }
      if (!form.checkValidity()) {
        event.preventDefault();
        form.reportValidity();
      } else {
        message.hidden = true;
      }
    });
    var params = new URLSearchParams(window.location.search);
    if (params.get('sent') === '1') {
      var confirmation = document.getElementById('form-success');
      if (confirmation) confirmation.hidden = false;
    }
  }

  document.querySelectorAll('img[data-fallback]').forEach(function (img) {
    img.addEventListener('error', function () {
      if (!img.dataset.usedFallback) {
        img.dataset.usedFallback = '1';
        img.src = img.getAttribute('data-fallback');
      }
    });
    if (img.complete && img.naturalWidth === 0 && !img.dataset.usedFallback) {
      img.dataset.usedFallback = '1';
      img.src = img.getAttribute('data-fallback');
    }
  });
});
