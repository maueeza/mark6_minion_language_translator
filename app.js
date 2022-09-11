

var ClickBtn = document.querySelector("#btn-click");
ClickBtn.addEventListener("click", clickHandler)

var inpText = document.querySelector("#inp-textarea");
console.log(inpText);

function clickHandler()
{
    console.log("Clicked!");
    console.log(inpText.value);
}