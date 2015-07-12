//Controls for the browser extension -- Gregle
chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript(null, {file:"elevator.js"});
});