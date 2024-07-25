try{
    console.log("try block");
    throw new Error("test")
}catch(error){
    console.log("catch block");
}finally{
console.log("finally block");
}

