var domains = {}

function error(msg) {
    errordiv = document.getElementById('errordiv');
    errordiv.innerHTML = msg;
}

function addDomain() {
    hostname_obj = document.getElementById("hostname")
    agent_obj = document.getElementById("agent")

    hostname = hostname_obj.value
    agent = agent_obj.value

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

    domains[hostname] = agent
    chrome.storage.sync.set({'domains': domains})
    hostname_obj.value = ""
}




/* Adds event listeners, just because google has to use shitty js and then try to fix it with restrictions */
document.addEventListener('DOMContentLoaded',
    function () {
        document.getElementById("btnAdd").addEventListener("click", addDomain);  
    }
);

chrome.storage.sync.get('domains',                       
    function (result) {
        domains = result.domains
        if (domains == undefined)
            domains = {}
    }
);
