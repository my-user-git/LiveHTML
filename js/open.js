document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.header-content__user-icon').addEventListener('click', function () {
    document.querySelector('.header-content__user').classList.add('open__user')
  })

  document.querySelector('.header-content__cart-icon').addEventListener('click', function () {
    document.querySelector('.header-content__cart-in').classList.add('open__cart')
  })

  document.querySelector('.header-content__favourites-icon').addEventListener('click', function () {
    document.querySelector('.header-content__favourites-link').classList.add('open__cart')
  })

  document.querySelector('.header-content__balance-icon').addEventListener('click', function () {
    document.querySelector('.header-content__compare').classList.add('open__cart')
  })
  
})

document.addEventListener('click', e => {
  const target = e.target // находим элемент, на котором был клик
  if (!target.closest('.open__user') && !target.closest('.header-content__user-icon')) {
    document.querySelector('.header-content__user').classList.remove('open__user')
  }

  if (!target.closest('.open__cart') && !target.closest('.header-content__cart-icon')) {
    document.querySelector('.header-content__cart-in').classList.remove('open__cart')
  }

  if (!target.closest('.open__cart') && !target.closest('.header-content__favourites-icon')) {
    document.querySelector('.header-content__favourites-link').classList.remove('open__cart')
  }


  if (!target.closest('.open__cart') && !target.closest('.header-content__balance-icon')) {
    document.querySelector('.header-content__compare').classList.remove('open__cart')
  }
})
