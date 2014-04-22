// receives message from background script
chrome.extension.onMessage.addListener(function(message, sender) {
  if (message.logUrl) {
    var url = document.URL;
    alert(url);
  }
});
