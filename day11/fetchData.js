fetch('https://dummyjson.com/users').then(response=> response.json()).then(data=>console.log(data)).catch(error=>log(error))

async function getData(){
    try {
        const users = await fetch('https://dummyjson.com/users')
        const json = await users.json()
        console.log(json);
    } catch (error) {
        console.log(error);
    }   
   
}

getData()