//Controls for the browser extension -- Gregle
chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript(null, {file:"elevator.js"});
});


var aud = new Audio("ding.mp3");
aud.play();