"DpEx", a browser extension is developed to helps consumers navigate the internet . The extension  highlights the individual dark patterns on websites so that consumers become aware of the influences impact them. The tool provides information regarding the nature of these patterns and allows the user to block the dark patterns if necessary (User's choice).

Features:
- Automatic detection of dark patterns on web pages
- Highlighting of suspicious elements with minimal impact on page appearance
- Provides information on detected dark patterns, including their category
- Blocking of web page content based on user's choice
- Display's number of detected dark pattern
- Able to individually highlight each detected pattern

Installation Instructions

To set up the extension, you need to download either the repository or the chrome folder. Since the extension isn't available in the browser stores, it must be installed in developer mode for browsers. Follow the specific steps outlined below for various tested browsers.

For Chrome:

1. Open the Extensions page by typing chrome://extensions in a new tab.
   Alternatively, click the puzzle-shaped Extensions menu button and choose Manage Extensions at the bottom of the menu.
   Alternatively, click the Chrome menu, hover over More Tools, and then select Extensions.

2. Enable Developer Mode by toggling the switch next to Developer mode.

3. Click the Load unpacked button and choose the chrome directory.

4. (Optional): To permanently display the Pattern Highlighter icon, click the Extensions menu puzzle button in the address bar and then click the Pin button.

For Edge:

Access the Extensions page by typing edge://extensions in a fresh tab. Alternatively, click the Settings and more (...) button, choose Extensions, and select Manage extensions from the displayed popup. Activate Developer Mode by toggling the switch next to Developer mode. Utilize the Load unpacked button to choose the chrome directory. Optionally, click the Extensions menu puzzle button in the address bar, and then select the Show in Toolbar button (eye icon) next to the Pattern Highlighter to ensure its icon is always visible.

For Opera:

Visit the Extensions page by typing opera://extensions in a new tab, or utilize the Cmd/Ctrl + Shift + E shortcut. Activate Developer Mode by toggling the switch adjacent to Developer mode. Press the Load unpacked button and choose the chrome directory. Optionally, click the Extensions menu cube button in the address bar and subsequently hit the Pin button next to the Pattern Highlighter to ensure its icon remains visible permanently.

Tech Stack Used:-

1. Web Extension- HTML, CSS, JS
2. IDE- VS code
3. Dataset Information: The dataset.tsv file located in this directory serves as the dataset for automatically detecting text-based dark patterns.
4. Scraping Section: This directory contains the code designed to gather non-dark pattern texts for inclusion in the dataset.
