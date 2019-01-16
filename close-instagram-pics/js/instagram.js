chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.isInstagramPostPage === true){
      document.getElementsByClassName('coreSpriteLeftPaginationArrow')[0].parentElement.parentElement.addEventListener('click', () => {
        window.history.back();
      });
    }
  });
