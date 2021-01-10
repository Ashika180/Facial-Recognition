Webcam.set({
    width: 450,
    height: 300,
    image_format: 'jpg',
    jpg_quality: 90
});

camera = document.getElementById("camera");
Webcam.attach("#camera");

function Take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = "<img id= 'captured_image' src= " + data_uri + ">";   
    });
}

console.log("ml5 version", ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/PU8pVlauT/model.json", Model_enable);

function Model_enable(){
    console.log("Model Loaded.");
}

function Check(){
    image = document.getElementById("captured_image");
    classifier.classify(image, Gotresult);
}

function Gotresult(error, result){
if(error){
    console.error("Error");
}
else{
    console.log(result);
    document.getElementById("family_person").innerHTML = result[0].label;
    document.getElementById("accu").innerHTML = result[0].confidence.toFixed(3);
}
}
