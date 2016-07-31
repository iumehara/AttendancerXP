chrome.runtime.onMessage.addListener(function(message, sender) {
  if (message.content == 'ready') {
    chrome.pageAction.show(sender.tab.id);
  }
});

var attendanceProUrl = "https://attendance.cvi.co.jp/AttendanceTableFullSimp.aspx";
chrome.pageAction.onClicked.addListener(function(tab) {
  if (tab.url == attendanceProUrl) {
    chrome.tabs.sendMessage(tab.id, { content: "setTimes" });
  } else {
    chrome.tabs.update(tab.id, { url: attendanceProUrl })
  }
});
