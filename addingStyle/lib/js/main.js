document.body.style.backgroundColor = "#d3c26f";

document.getElementsByClassName("name")[0].style.color = "black";
document.getElementsByClassName("name")[1].style.color = "black";

document.getElementsByClassName("name")[0].style.textShadow = "-6px 5px 2px yellow";
document.getElementsByClassName("name")[1].style.textShadow = "-6px 5px 2px cyan";

function OnClick(){
    document.querySelector("trash").text = "trash";
    document.querySelector("meta").text = "Meta";
}

