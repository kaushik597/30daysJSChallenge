const p= document.querySelector("p") 
function handleClick(e){
    console.log("e",e);
    p.textContent= "button is clicked"
}

const img=document.querySelector("img")

function doubleclick(e){ 
    console.log("double clicked");
    if (img.style.visibility === "visible") {
        img.style.visibility="hidden"
    }else{
        img.style.visibility="visible"
    }
}

