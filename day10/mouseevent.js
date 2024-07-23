const first = document.querySelector("#first")
function mouseOver(e){
    console.log("mouse over");
    first.textContent="Po ra babu"

}

const second = document.querySelector("#second")
function mouseOut(e){
    console.log("mouse out");
    second.textContent="rara bhai";
    second.style.backgroundColor="red";
}