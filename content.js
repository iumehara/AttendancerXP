chrome.runtime.sendMessage(
  {content: 'ready'}
);

chrome.runtime.onMessage.addListener(function(message, sender) {
  if (message.content == "setTimes") {
    setTimes();
  }
});

var setTimes = function() {
  for (var i=0; i<31; i++) {
    var day;
    i + 1 < 10 ? day = "0" + (i + 1) : day = i + 1;
    var idString = "ctl00_ContentMain_AttendanceTableRepeater_ctl" + day;
    var startInputId = idString + "_txtStartTime";
    var endInputId = idString + "_txtEndTime";
    setValueIfBlank(document.getElementById(startInputId), '09:00');
    setValueIfBlank(document.getElementById(endInputId), '18:00');
  };
};

var setValueIfBlank = function(input, value) {
  if (input && input.value == "" && input.style['background-color'] == "lightyellow") {
      input.value = value;
  };
};
