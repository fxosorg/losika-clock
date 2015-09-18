'use strict';
if (document.documentElement) {
  initialize();
}
else {
  window.addEventListener('DOMContentLoaded', initialize);
}

function initialize() {
  // avoid multiple injection
  if (document.querySelector('.foxkeh-overlay')) {
    console.log("Foxkeh Overlay already injected");
    return; // abort
  }
  
  console.log("Injecting Foxkeh Overlay");
  var div = document.createElement('div');
  div.classList.add('foxkeh-overlay');
  document.body.appendChild(div);
  
  // cannot use chrome.extension.getURL yet
  // img.src = chrome.extension.getURL("images/200708.png");
}
