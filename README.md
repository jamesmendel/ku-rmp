# KU | Search RateMyProfessors

### Modifies classes.ku.edu professor links to redirect to their RateMyProfessors.com search query

This browser extension was designed to make finding ratings for your future professors easier. It modifies each link in the results of classes.ku.edu to the search query for that professor on RateMyProfessors.com

[Screenshot](https://i.imgur.com/sGeA1fC.png)

# How to install
Chrome:
* Automatically:
  1. Extension now available at Chrome Web Store! Pick it up [here](https://chrome.google.com/webstore/detail/ku-search-ratemyprofessor/fcbcjgfbgnnjkokdmgdbmlibeakmalgi/)

* Manually:
  1. Download lastest release (`.zip`) from [Releases](https://github.com/jamesmendel/ku-rmp/releases/)
  2. Extract to folder
  3. Open Chrome and navigate to the url `chrome://extensions`
  4. Enable Developer mode (top right corner)
  5. Click `Load unpacked`
  6. Navigate to the extracted extension and select the root of the folder. Click `Select Folder`

In Firefox:
* Automatically:
  1. Head over to [Releases](https://github.com/jamesmendel/ku-rmp/releases/) and click the `.xpi` for the release you would like to install.
  2. Click `Continue to Installation`
  3. Click `Add`

* Manually:
  1. Navigate to packaged `.xpi` from [Releases](https://github.com/jamesmendel/ku-rmp/releases/)
  2. Right-click, `Save Link As`
  2. In Firefox, press `Ctrl + Shift + A` to open the Addons page
  3. Click the cog-wheel and select `Install Add-on From File...`
  4. Select the `.xpi` of the release you would like to install


# How to build
Using `web-ext` (`npm i --global web-ext`):

1. Clone this repositority (`git clone https://github.com/jamesmendel/ku-rmp.git`)
2. `cd` into the root
3. Run `web-ext build`
4. A new folder called `web-ext-artifacts` should contain the compiled project in a .zip

Manually:

1. Clone this repository (`git clone https://github.com/jamesmendel/ku-rmp.git`)
2. Select `manifest.json`
3. Select all dependant files referenced within `manifest.json` (such as `app.js`, `ku-rmp.js`, `/icons`)
4. Create a compressed zip file
