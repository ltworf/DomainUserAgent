function addDomainToSettings(storage, hostname, agent) {
    if (hostname == '') {
        error('Empty hostname');
        return;
    }

    proto_end = hostname.indexOf('://')
    if (proto_end != -1)
        hostname = hostname.substring(proto_end+3)

    if (hostname.lastIndexOf('/') == hostname.length -1)
        hostname = hostname.substring(0, hostname.length - 1);

    if (hostname.indexOf('/') != -1) {
        error('Invalid hostname');
        return;
    }

    storage[hostname] = agent
    chrome.storage.sync.set({'domains': storage})
}
