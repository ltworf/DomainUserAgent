var domains = {}

function addDomain() {
    hostname = document.getElementById("hostname").value
    agent = document.getElementById("agent").value
    
    domains[hostname] = agent
    
    chrome.storage.sync.set({'domains': domains})
    
    createTable()
    
}

function createTable() {
    table = "<table>"
    
    k = Object.keys(domains)
    for (i=0; i<k.length; i++) {
        table+="<tr>"
        
        table+="<td>"
        table+=k[i]
        table+="</td>"
        
        table+="<td>"
        table+=domains[k[i]]
        table+="</td>"
        
        table+="<td>"
        table+='<button onClick="alert()">Remove</button>'
        table+="</td>"
        
        
        table+="</tr>"
    }
    
    
    
    table += "</table>"
    
    d = document.getElementById("tablediv");
    d.innerHTML = table;
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
        createTable()
    }
);