var sTennisApp = (function () {
    var instance;

    function createInstance() {
        var object = new Session();
        return object;
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
   
})();

function Session() {
    this.SessionKey = "sTennisSession";
    this.session = window.localStorage.getItem("stSession");
    this.url = window.localStorage.getItem("stUrl");
    this.username = window.localStorage.getItem("stUsername");
    this.userID = window.localStorage.getItem("stUserID");

    this.setUrl = function (value) {
        this.url = value;
        window.localStorage.setItem("stUrl", this.url);
    };

    this.setSession = function (value) {
        this.session = value;
        window.localStorage.setItem("stSession", this.session);
    };

    this.setUsername = function (value) {
        this.username = value;
        window.localStorage.setItem("stUsername",this.username);
    };

    this.setUserID = function (value) {
        this.userID = value;
        window.localStorage.setItem("stUserID", this.userID);
    };
}


function run() {

    var instance1 = sTennisApp.getInstance();
    var instance2 = sTennisApp.getInstance();

    alert(instance1.url);
    instance1.setUrl("sws");
    alert(instance2.getUrl());
    
    // alert("Same instance? " + (instance1 === instance2));
}