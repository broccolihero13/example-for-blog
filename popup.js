const GOOGLE_ORIGIN = 'https://www.google.com';

document.getElementById("click-me").addEventListener("click", () => {
  alert("Hello from the popup!");
});

  chrome.tabs.query({ active: true, currentWindow: true }, ([tab]) => {
    if (!tab.url) return;
    const url = new URL(tab.url);
    if (url.origin === GOOGLE_ORIGIN) {
        sidePanelButton = document.getElementById("open-side-panel");
        sidePanelButton.style.display = 'block';

        sidePanelButton.addEventListener("click", () => {
        chrome.sidePanel.open({ tabId: tab.id });
        });
    }
  });


