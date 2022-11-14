
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
        console.log(imageData);
        $("#myimg").attr("src", imageData);
    }

    function onError() {
        alert("Photo not taken because" + message);
    }
}
