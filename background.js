chrome.runtime.onMessage.addListener(function(message, sender) {
  if (message.content == 'ready') {
    chrome.pageAction.show(sender.tab.id);
  }
});

chrome.pageAction.onClicked.addListener(function(tab) {
  chrome.tabs.sendMessage(tab.id, {content: "setTimes"});
});
