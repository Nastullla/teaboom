"use strict";

$(function () {
  $('.js-inner-slider').slick({
    slidesToShow: 1,
    arrows: false,
    asNavFor: '.js-inner-thumbnail',
    vertical: false,
    autoplay: false,
    verticalSwiping: false,
    centerMode: false,
    useTransform: false,
    responsive: [{
      breakpoint: 767,
      settings: {
        dots: true
      }
    }]
  });
  $('.js-inner-thumbnail').slick({
    slidesToShow: 3,
    vertical: true,
    focusOnSelect: true,
    verticalSwiping: false,
    autoplay: false,
    centerMode: false,
    asNavFor: '.js-inner-slider',
    prevArrow: $('.detail__arrow-btn_prev'),
    nextArrow: $('.detail__arrow-btn_next'),
    responsive: [{
      breakpoint: 767,
      settings: {
        arrows: false
      }
    }]
  });

  // Переключение фасовки: цена, граммы, артикул

  var tabs = document.querySelector('[data-selector="weight-tabs"]');
  if (!tabs) return;
  var weightEl = document.querySelector('[data-selector="detail-weight"]');
  var articleEl = document.querySelector('[data-selector="detail-article"]');
  var priceEl = document.querySelector('[data-selector="detail-price"]');
  var oldPriceEl = document.querySelector('[data-selector="detail-old-price"]');
  var tabButtons = tabs.querySelectorAll('.detail__weight-tab');
  tabButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      tabButtons.forEach(function (item) {
        item.classList.remove('active');
      });
      this.classList.add('active');
      if (weightEl) {
        weightEl.textContent = this.dataset.weight + 'г';
      }
      if (articleEl) {
        articleEl.textContent = 'арт: ' + this.dataset.article;
      }
      if (priceEl) {
        priceEl.textContent = this.dataset.price;
      }
      if (oldPriceEl) {
        oldPriceEl.textContent = this.dataset.oldPrice;
      }
    });
  });
});