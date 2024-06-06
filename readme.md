# Example Chrome Extension
## Overview
This Chrome extension demonstrates how to create a basic extension with a side panel that is enabled on Google pages and disabled on others. It includes a popup and a simple side panel with interactive content.

## Features
* __Popup:__ Displays a popup when the extension icon is clicked.
* __Side Panel:__ The side panel is enabled on Google pages and can be manually triggered via the popup.
* __Background Script:__ Listens to tab updates and controls the side panel visibility based on the active tab's URL.

## Installation
1. Clone or download this repository to your local machine.
1. Open Chrome and navigate to chrome://extensions/.
1. Enable "Developer mode" by toggling the switch in the top right corner.
1. Click on the "Load unpacked" button and select the folder where you downloaded or cloned the extension.

## Usage
1. Click on the extension icon in the Chrome toolbar to open the popup.
1. If you are on a Google page, click the "Open Side Panel" button in the popup to enable the side panel.
1. The side panel will display a simple interface with a button that triggers an alert.

## Files
* `manifest.json`: Contains the extension configuration and permissions.
* `background.js`: Background script that manages the side panel visibility based on the tab's URL.
* `popup.html`: The HTML for the popup displayed when the extension icon is clicked.
* `popup.js`: JavaScript for the popup, handles the button click event.
* `sidepanel.html`: The HTML for the side panel.
* `sidepanel.js`: JavaScript for the side panel, handles the button click event.
* `images/`: Contains the icon images for the extension.

## Contributing
Feel free to fork this repository and submit pull requests. Any contributions are welcome!
