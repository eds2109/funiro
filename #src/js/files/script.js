window.onload = function () {
  document.addEventListener('click', documentActions)

  // Actions (делегирование события click)
  function documentActions(e) {
    const targetElement = e.target
    if (window.innerWidth > 768 && isMobile.any()) {
      if (targetElement.classList.contains('menu__arrow')) {
        targetElement.closest('.menu__item').classList.toggle('_hover')
      }
    }
  }
}
