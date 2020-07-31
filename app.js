//Injects ku-rmp.js into DOM to have direct access to document elements
(function kuRMP() {
    var manifest = browser.runtime.getManifest()
    console.log(`%c ${manifest.name}`, 'font-weight: bold; font-size: 50px;color: #e8000d; text-shadow: 3px 3px 0 white , 6px 6px 0 #0051ba');
    console.log(`\tLoaded Extention: ${manifest.name} ~ Version ${manifest.version}\n\tBy ${manifest.author} - ${manifest.homepage_url}`);

    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = chrome.extension.getURL('ku-rmp.js');
    var head = document.getElementsByTagName('head')[0];
    if (!head) return;
    head.appendChild(script);
})()