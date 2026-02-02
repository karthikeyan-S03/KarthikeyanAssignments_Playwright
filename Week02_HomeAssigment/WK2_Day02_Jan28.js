let browser = "Chrome";

function checkBrowserVersion(callback){
    console.log("Chrome browser is launching")

    setTimeout(()=>{
        callback();
    },5000)
}

function browserName(){
    console.log("Chrome browser version is 20.x.x.")
}

checkBrowserVersion(browserName);
