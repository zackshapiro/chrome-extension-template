(function() {
  // receives message from popup script
  chrome.runtime.onMessage.addListener( function(request, sender, sendResponse) {
    if (request.opened == true) {
      // sends response back to popup script
      sendResponse({example: "goodbye"});

      // sends response to content script
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { logUrl: true } );
      });
    }
  });
})();
