
Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function takeSnapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

console.log('ml5 version:', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/mb2ow8Nan/model.json',modelLoaded);

function modelLoaded() {
    console.log('Model Loaded!');
}

function check()
  {
    //variavel que armazena a imagem capturada
    img = document.getElementById('captured_image');
    //Classificando o objeto na imagem capturada
    classifier.classify(img, gotResult);
  }

//função com resultado da classificação
function gotResult(error, results) {
  if (error) {
//se ocorreu um erro, exebir na tela de console
    console.error(error);
  } else {
//se não, exebir o resultado no console
    console.log(results);
//exibindo na tela do site o nome do objeto identificado
    document.getElementById("resultObjectName").innerHTML = results[0].label;
//exibindo a precisão do  objeto identificado na tela
    document.getElementById("resultObjectAccuracy").innerHTML = results[0].confidence.toFixed(3);
  }
}
