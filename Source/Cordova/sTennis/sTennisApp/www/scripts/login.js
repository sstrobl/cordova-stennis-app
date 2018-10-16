// Eine Einführung zur leeren Vorlage finden Sie in der folgenden Dokumentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// Zum Debuggen von Code beim Laden einer Seite in cordova-simulate oder auf Android-Geräten/-Emulatoren: Starten Sie Ihre App, legen Sie Haltepunkte fest, 
// und führen Sie dann "window.location.reload()" in der JavaScript-Konsole aus.
(function () {
    "use strict";

    document.addEventListener('deviceready', onDeviceReady.bind(this), false);
    document.getElementById("btnLogin").addEventListener("click", btnLoginClick);

    function onDeviceReady() {
        // Verarbeiten der Cordova-Pause- und -Fortsetzenereignisse
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener( 'resume', onResume.bind( this ), false );
        
        // TODO: Cordova wurde geladen. Führen Sie hier eine Initialisierung aus, die Cordova erfordert.
        var parentElement = document.getElementById('deviceready');

    };

    function onPause() {
        // TODO: Diese Anwendung wurde ausgesetzt. Speichern Sie hier den Anwendungszustand.
    };

    function onResume() {
        // TODO: Diese Anwendung wurde erneut aktiviert. Stellen Sie hier den Anwendungszustand wieder her.
    };

})();

function btnLoginClick() {

    var cluburl = $("#txtcluburl").val();
    var username = $("#txtusername").val();
    var password = $("#txtpassword").val();

    if ($.trim(username).length > 0 & $.trim(password).length > 0)
    {
        $.ajax({
            type: "POST",
            url: cluburl + '/api/login',
            data: { "username": username, "password": password },
            crossDomain: true,
            cache: false,
            beforeSend: function () { $("#signup").val('Connecting...'); },
            success: function (data) {
                if (data != 'null')
                {
                    var obj = JSON.parse(data);

                    if (obj != null && obj.length > 0)
                    {
                        //var instance = sTennisSession();
                        var app = sTennisApp.getInstance();
                        app.setUrl(cluburl);
                        app.setUsername(obj[0].viewName);
                        app.setUserID(obj[0].SID);
                        //app.setSession(data.substring(1, data.length - 1));
                        app.setSession(obj[0].sessionID);
                        //alert("Logged in!");
                        window.location = "index.html";
                    }
                }
                else
                {
                    alert("Something Went wrong!");
                }
            }
        });
    }
    return false;

}
