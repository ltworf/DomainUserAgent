var domains = {}

function options() {
    chrome.tabs.create({'url': chrome.extension.getURL("options.html") } );
}

function error(msg) {
    errordiv = document.getElementById('errordiv');
    errordiv.innerHTML = msg;
}

function addDomain() {
    hostname_obj = document.getElementById("hostname")
    agent_obj = document.getElementById("agent")

    hostname = hostname_obj.value
    agent = agent_obj.value

    hostname_obj.value = ""
    addDomainToSettings(domains, hostname, agent)
}




/* Adds event listeners, just because google has to use shitty js and then try to fix it with restrictions */
document.addEventListener('DOMContentLoaded',
    function () {
        document.getElementById("btnAdd").addEventListener("click", addDomain);
    }
);

document.addEventListener('DOMContentLoaded',
    function() {
        document.getElementById("btnOptions").addEventListener("click", options);
    }
);

chrome.storage.sync.get('domains',
    function (result) {
        domains = result.domains
        if (domains == undefined)
            domains = {}
    }
);
