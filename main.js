Webcam.set({
    wdith:310,
    height:300,
    image_formrat:'png',
    png_quality:90,
    consstraints:{facingMode:"environment"}
});

Webcam.attach('#camera');

function takepic(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="image1" src="'+data_uri+'"/>';
    })
}

console.log('ml5 version:',ml5.version);

classifier = ml5.imageClassifier('MobileNet',modelloaded);

function modelloaded(){
    console.log("Model loaded sucessfully");
}

function identifyimage(){
    img = document.getElementById("image1");
    classifier.classify(img,gotresult);
}

function gotresult(error,results){
    if (error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("object_name").innerHTML = results[0].label;
    }
}