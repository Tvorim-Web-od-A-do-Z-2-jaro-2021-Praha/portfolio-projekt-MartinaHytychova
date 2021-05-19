(function () {
  let phone;
  let email;
  let windowHeight;
  function init() {
    phone = document.querySelectorAll('.contact__phone');
    email = document.querySelectorAll('.contact__email');
    windowHeight = window.innerHeight;
  }

  function checkPosition() {
    for (let i = 0; i < phone.length; i++) {
      const element = phone[i];
      const positionFromTop = phone[i].getBoundingClientRect().top;
      if (positionFromTop - windowHeight <= 0) {
        element.classList.add('shake');
      }
    }
    for (let i = 0; i < email.length; i++) {
      const element = email[i];
      const positionFromTop = email[i].getBoundingClientRect().top;
      if (positionFromTop - windowHeight <= 0) {
        element.classList.add('move-out');
      }
    }
  }

  window.addEventListener('scroll', checkPosition);
  window.addEventListener('resize', init);

  init();
  checkPosition();
})();
