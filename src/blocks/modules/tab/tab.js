(function () {
  let tabs = document.querySelectorAll('.tab');

  let initTab = function (tab) {
    if (!tab || !tab.querySelectorAll('.js-tab-link').length) return;

    let clearContent = function () {
      let contentEl = tab.querySelector('.js-tab-content.active');
      contentEl?.classList.remove('active');

      let linkEl = tab.querySelector('.js-tab-link.active');
      linkEl?.classList.remove('active');
    };

    let onClickToggle = function (evt) {
      clearContent(evt);
      const contentName = evt.currentTarget.dataset.toggle;
      let contentEl = tab.querySelector('#' + contentName);
      contentEl?.classList.add('active');
      evt.target?.classList.add('active');     
    };

    let toggles = tab.querySelectorAll('.js-tab-link');
    for (let i = 0; i < toggles.length; i++) {
      toggles[i].addEventListener('click', onClickToggle);
    }
  };

  for (let i = 0; i < tabs.length; i++) {
    initTab(tabs[i]);
  }
})();
