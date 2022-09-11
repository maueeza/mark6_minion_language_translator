

var ClickBtn = document.querySelector("#btn-click");
ClickBtn.addEventListener("click", clickHandler)
//input
var inpText = document.querySelector("#inp-textarea");

//output
var outputDiv = document.querySelector("#output-text");

//processing
function clickHandler()
{
    console.log("Clicked!");
    console.log(inpText.value);
    outputDiv.innerText=inpText.value;

    
}