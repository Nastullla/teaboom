"use strict";

(function () {
  var tabs = document.querySelectorAll('.tab');
  var initTab = function initTab(tab) {
    if (!tab || !tab.querySelectorAll('.js-tab-link').length) return;
    var clearContent = function clearContent() {
      var contentEl = tab.querySelector('.js-tab-content.active');
      contentEl === null || contentEl === void 0 || contentEl.classList.remove('active');
      var linkEl = tab.querySelector('.js-tab-link.active');
      linkEl === null || linkEl === void 0 || linkEl.classList.remove('active');
    };
    var onClickToggle = function onClickToggle(evt) {
      var _evt$target;
      clearContent(evt);
      var contentName = evt.currentTarget.dataset.toggle;
      var contentEl = tab.querySelector('#' + contentName);
      contentEl === null || contentEl === void 0 || contentEl.classList.add('active');
      (_evt$target = evt.target) === null || _evt$target === void 0 || _evt$target.classList.add('active');
    };
    var toggles = tab.querySelectorAll('.js-tab-link');
    for (var i = 0; i < toggles.length; i++) {
      toggles[i].addEventListener('click', onClickToggle);
    }
  };
  for (var i = 0; i < tabs.length; i++) {
    initTab(tabs[i]);
  }
})();