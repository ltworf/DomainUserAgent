var domains = {}

function addDomain() {
    hostname = document.getElementById("hostname").value
    agent = document.getElementById("agent").value
    
    domains[hostname] = agent
    
    chrome.storage.sync.set({'domains': domains})
    
    hostname.value = ""
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
    }
);