

/* Registers callback function */
chrome.webRequest.onBeforeSendHeaders.addListener(
    function(details) {
        
        
        //chrome.storage.sync.set({'value': theValue})
        
//         chrome.storage.local.get('enabled', function (result) {
//         channels = result.channels;
//         alert(result.channels);
//         $("#channels").val(channels);
//         });
        
        
        //TODO if useragent needs to be changed for this domain
        hostname = getHostname(details.url)
        
        

        for (var i = 0; i < details.requestHeaders.length; i++) {
            if (details.requestHeaders[i].name === 'User-Agent') {
                details.requestHeaders[i].value = "I hate js"
                break;
            }
        }
        return {requestHeaders: details.requestHeaders};
    },
    {urls: ["<all_urls>"]},
    ["blocking", "requestHeaders"]
);


var getHostname = function(href) {
    var l = document.createElement("a");
    l.href = href;
    return l.hostname;
};