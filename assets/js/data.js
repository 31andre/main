(function(){
    "use strict";

    fetch("data.json", {
        method: 'GET',
        headers: {
            "content-type": "application/json",
            "accept": "application/json"
        },
    }).then(res=>{
        if(res.ok){
            return res.json();
        }else{
            console.log(res.status, res.statusText, res.url)
            throw new error(res.status, res.statusText, res.url)
        }
    }).then(data => {
        console.log(data)
    }).catch((error)=>{
        console.log("error : " + error)
        
    })
})();