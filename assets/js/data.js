(function(){
    "use strict";

    fetch("data.json", {
        method: 'GET',
    }).then(res=>{
        if(res.ok){
            console.log(res)
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