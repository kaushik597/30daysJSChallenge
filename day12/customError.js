class customError extends Error{
    constructor(message){
        super(message);
        this.name="custom error"
    }
}

try{
    throw new customError("throwed custom error")
}catch(error){
    console.error(error, error.name);
}

class StringEmpty extends Error{
    constructor(message){
        super(message)
        this.name= "string error"
    }
}

function emptyCheck(value){
    try{
        if(value.length==0){
            throw new StringEmpty("string is empty")
        }
    }catch(error){
        console.log(error, error.name);
    }
  
}

emptyCheck("")