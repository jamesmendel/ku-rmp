# KU | Search RateMyProfessors

### Modifies classes.ku.edu professor links to redirect to their RateMyProfessors.com search query

This browser extention was designed to make finding ratings for your future professors easier. It modifies each link in the results of classes.ku.edu to the search query for that professor on RateMyProfessors.com

# How to install
Chrome:
* TODO

In Firefox:
* TODO

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