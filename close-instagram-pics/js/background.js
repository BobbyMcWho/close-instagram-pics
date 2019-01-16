chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if( urlUpdated(changeInfo.url) && isInstagramPost(changeInfo.url)){
    chrome.tabs.sendMessage(tabId, {isInstagramPostPage: true});
    console.log('hello');
  }
});

function isInstagramPost(url){
  return /instagram.com\/p/.test(url)
}

function urlUpdated(url){
  return url !== null && url !== undefined
}
