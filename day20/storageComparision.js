function store(key, val){
    localStorage.setItem(key,val)
    sessionStorage.setItem(key,val)
}

store("abd","defgh")

function retrieve(key){
    const val1=localStorage.getItem(key);
    const val2=sessionStorage.getItem(key);
    console.log(val1,val2);
    
    
    
}
retrieve("abd");


localStorage.clear();
sessionStorage.clear()
