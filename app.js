

var ClickBtn = document.querySelector("#btn-click");
ClickBtn.addEventListener("click", clickHandler)
//input
var inpTextArea = document.querySelector("#inp-textarea");

//output
var outputDiv = document.querySelector("#output-text");

//processing

function errorHandler(error)
{
    console.log("Error occured ",error);
    alert("Something wrong with server! Please try again after sometime! ");
}

function constructURL(txt)
    {
        //var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";
        var serverURL = "https://api.funtranslations.com/translate/minion.json";
        return serverURL+"?"+"text="+txt;
    }

function clickHandler()
{
    /*console.log("Clicked!");
    console.log(inpText.value);
    outputDiv.innerText=inpText.value;*/

    var InpTxt = inpTextArea.value;
        fetch(constructURL(InpTxt))
        .then(response=>response.json())
        .then(json=> outputDiv.innerHTML = json.contents.translated)
        .catch(errorHandler)
    
    
}