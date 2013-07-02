domains = {}

/*
 * This function reads the settings and
 * updates the "domains" variable.
 * It's asynchronous
 **/
function getSettings() {
    chrome.storage.sync.get('domains',                       
        function (result) {
            domains = result.domains
        }
    );
}

var getHostname = function(href) {
    var l = document.createElement("a");
    l.href = href;
    return l.hostname;
};

/* Main */

/* Reloads the settings if they are changed */
chrome.storage.onChanged.addListener(
    function(changes, namespace) {
        for (key in changes) {
            if (key == "domains") {
                getSettings()
            }
        }
    }
);



/* Registers callback function */
chrome.webRequest.onBeforeSendHeaders.addListener(
    function(details) {
        hostname = getHostname(details.url)
        
        if (domains[hostname] == undefined)
            return;
        
        for (var i = 0; i < details.requestHeaders.length; i++) {
            if (details.requestHeaders[i].name === 'User-Agent') {
                details.requestHeaders[i].value = domains[hostname]
                break;
            }
        }
        return {requestHeaders: details.requestHeaders};
    },
    {urls: ["<all_urls>"]},
    ["blocking", "requestHeaders"]
);

getSettings()