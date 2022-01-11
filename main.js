Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach('camera');

function take_snapshot() {
    Webcam.snap(function (data_image) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_image + '"/>';
    });
}

console.log('ml5 version: ', ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/h6Ce8n4r_/model.json", modelLoaded);

function modelLoaded() {
    console.log('Model Loaded!');
}

prediction1 = "";
prediction2 = "";

function speak() {
    var synth = window.speechSynthesis;
    speak_data_1 = "The first prediction is " + prediction1;
    speak_data_2 = "And the second prediction is " + prediction2;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterThis);
}

function check() {
    
}