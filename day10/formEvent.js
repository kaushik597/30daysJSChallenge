const form = document.querySelector("#form");
form.addEventListener("submit", panchayat);

const formInput = document.querySelector("#forminput")
function panchayat(event) {
    console.log(formInput.value);
    event.preventDefault();

}


const para = document.querySelector("#para")
const mySelect= document.querySelector("#myselect")

mySelect.addEventListener("change", marpu);
function marpu(event){
    para.textContent= event.target.value
    console.log(event.target.value);
}

//todo form events and event delegation