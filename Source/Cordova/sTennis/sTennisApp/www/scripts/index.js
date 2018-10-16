// Eine Einführung zur leeren Vorlage finden Sie in der folgenden Dokumentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// Zum Debuggen von Code beim Laden einer Seite in cordova-simulate oder auf Android-Geräten/-Emulatoren: Starten Sie Ihre App, legen Sie Haltepunkte fest, 
// und führen Sie dann "window.location.reload()" in der JavaScript-Konsole aus.
(function () {
    "use strict";

    document.addEventListener('deviceready', onDeviceReady.bind(this), false);

    function onDeviceReady() {
        // Verarbeiten der Cordova-Pause- und -Fortsetzenereignisse
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener( 'resume', onResume.bind( this ), false );
        
        // TODO: Cordova wurde geladen. Führen Sie hier eine Initialisierung aus, die Cordova erfordert.
        var parentElement = document.getElementById('deviceready');

        getUserData();
    };


    function getUserData()
    {
        var app = sTennisApp.getInstance();
        $('#lblusername').text(app.username);
        $('#lblsession').text(app.session);
        $('#lblurl').text(app.url);

        $.ajax({
            type: "GET",
            headers: {
                'sTennisSession': app.session,
                'test' : '123'
            },
            url: app.url + '/api/showUserInfos/' + app.userID + '?time=' + + Date.now(),
            crossDomain: true,
            cache: false,
//            beforeSend: function () { $("#signup").val('Connecting...'); },
            success: function(data){ $('#txtUser').text(data);},
            error: function () { $('#txtUser').text("error123"); }
        });
    }


    function onUserDataReceived(data)
    {
        $('#txtUser').text(data);
    }



    function onPause() {
        // TODO: Diese Anwendung wurde ausgesetzt. Speichern Sie hier den Anwendungszustand.
    };

    function onResume() {
        // TODO: Diese Anwendung wurde erneut aktiviert. Stellen Sie hier den Anwendungszustand wieder her.
    };
} )();