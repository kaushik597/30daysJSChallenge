const url = `https://wgg522pwivhvi5gqsn675gth3q0otdja.lambda-url.us-east-1.on.aws/636174`;
const failurl=`test123.com`
function test(){
    const data=fetch(failurl)
    .then(response=>{
        console.log(response);
        return response.text()})
        .catch(e=>console.log(e,"message"))

}

test();




async function test1(){
    try{
        const data=fetch("https://invalid-url.com")
        await data.response.json()
    }catch(e){
        console.log("catch block",e,"**************");
    }
}

test1()

