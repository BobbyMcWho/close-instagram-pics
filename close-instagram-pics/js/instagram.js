chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.isInstagramPostPage === true){
      let dialogNode = document.querySelector("div[role='dialog']");
      dialogNode.addEventListener('click', (e) => {
        if(e.target !== document.querySelectorAll("div[role='dialog']")[2]){
          window.history.back();
        }
      });
    }
  });
