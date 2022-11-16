
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    var options = {
        quality: 80,
        destinationType: Camera.DestinationType.FILE_URI
    }


    $("#takePhoto").on("click", takePic);

    function takePic() {
        navigator.camera.getPicture(onSuccess, onError, options);
    }

    function onSuccess(imageData) {
        resolveLocalFileSystemURL(imageData, function(fileEntry) {
            var myNewImage = fileEntry.toURL();
            $("#result").attr("src", myNewImage);
            $("#resultText").html("BEAUTIFUL!!");
            $("#takePhoto").html("Make Another Masterpiece");
        }, onError);
    }

    function onError() {
        alert("Photo not taken because" + message);
    }
}
