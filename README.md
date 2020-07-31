# KU | Search RateMyProfessors

### Modifies classes.ku.edu professor links to redirect to their RateMyProfessors.com search query

This browser extension was designed to make finding ratings for your future professors easier. It modifies each link in the results of classes.ku.edu to the search query for that professor on RateMyProfessors.com

[Screenshot](https://i.imgur.com/sGeA1fC.png)

# How to install
Chrome:
* Extention currently under review at Chrome Web Store

In Firefox:
* Manually:
  1. Download packaged `.xpi` from [Releases](https://github.com/jamesmendel/ku-rmp/releases/)
  2. In Firefox, press `Ctrl + Shift + A` to open the Addons page
  3. Click the cog-wheel and select `Install Add-on From File...`
  4. Select the `.xpi` of the release you would like to install

* Mozilla Addon Manager:
  1. This addon is currently under reivew, however once it is accepted, it can be installed [here](https://addons.mozilla.org/en-US/firefox/addon/ku-search-ratemyprofessors/)

# How to build
Using `web-ext` (`npm i --global web-ext`):

1. Clone this repositority
2. `cd` into the root
3. Run `web-ext build`
4. A new folder called `web-ext-artifacts` should contain the compiled project in a .zip

Manually

1. Clone this repository
2. Select `manifest.json`
3. Select all dependant files referenced within `manifest.json` (such as `app.js`, `ku-rmp.js`, `/icons`)
4. Create a compressed zip file
