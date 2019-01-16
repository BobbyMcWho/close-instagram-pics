chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.isInstagramPostPage === true){
      let dialogNode = document.querySelector("div[role='dialog']");
      dialogNode.addEventListener('click', () => {
        window.history.back();
      });
    }
  });
