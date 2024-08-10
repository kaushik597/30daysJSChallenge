let apiKey = "ur_api_key"; //replace with your api key
const showCity= document.querySelector("#city");
const weather = document.querySelector("#weather");
const temp= document.querySelector("#temp")
const weatherIcon = document.querySelector("#img")

const dt1= document.querySelector("#d1")
const dt2= document.querySelector("#d2")
const dt3= document.querySelector("#d3")
const dt4= document.querySelector("#d4")
const dt5= document.querySelector("#d5")

const img1= document.querySelector("#i1")
const img2= document.querySelector("#i2")
const img3= document.querySelector("#i3")
const img4= document.querySelector("#i4")
const img5= document.querySelector("#i5")

const temp1= document.querySelector("#t1")
const temp2= document.querySelector("#t2")
const temp3= document.querySelector("#t3")
const temp4= document.querySelector("#t4")
const temp5= document.querySelector("#t5")

let lat;
let long;
let city_name;
const cityElement = document.querySelector("#inputId");
cityElement.addEventListener("change", (event) => {
  console.log(event.target.value);
  city_name = event.target.value;
});

const getWeatherDetailsOfCity = async () => {
  console.log("get weatherdetails of city");

  try {
    let url = `http://api.openweathermap.org/data/2.5/find?q=${city_name}&appid=${apiKey}`;
    console.log(url);
    const resp = await fetch(url);
    const response = await resp.json();
    console.log(response);
    console.log(`temp`, response.list[0].main.temp);
    console.log(`name`,response.list[0].name);
    console.log(`weather`, response.list[0].weather[0].description);
    temp.textContent=`temperature: ${Math.floor(response.list[0].main.temp - 273.15)}c`;
    showCity.textContent=`city: ${response.list[0].name}`;
    weather.textContent=`weather: ${response.list[0].weather[0].description}`
    weatherIcon.setAttribute("src",`https://openweathermap.org/img/wn/${response.list[0].weather[0].icon}@2x.png`)
    lat= response.list[0].coord.lat;
    long= response.list[0].coord.lon;

    console.log("lat",lat,"long",long);
    
    let daysForecast=`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${apiKey}`
    const daysResponse = await fetch(daysForecast);
    const daysResponseData= await daysResponse.json();
    console.log(`five days data`, daysResponseData);
    const today = new Date();
    let dates=[];
    let forecastByDate={}
    for(let i=1;i<=5;i++){
        let date= new Date(today);
        date.setDate(today.getDate()+i);
        let datestring= date.toISOString().split('T')[0];
        dates.push(datestring)
    } 
 for (let item of daysResponseData.list){
    let  forecastDate =item.dt_txt.split(' ')[0];
    if(dates.includes(forecastDate)&& !daysResponseData.list[forecastDate]){
        forecastByDate[forecastDate]=item;
    }
  }

  const filteredForecast =Object.values(forecastByDate);
  console.log(filteredForecast);
  
    dt1.textContent=filteredForecast[0].dt_txt.split(' ')[0]
    img1.setAttribute("src",`https://openweathermap.org/img/wn/${filteredForecast[0].weather[0].icon}@2x.png`)
    temp1.textContent=` ${Math.floor(filteredForecast[0].main.temp - 273.15)}c`;
    
    dt2.textContent=filteredForecast[1].dt_txt.split(' ')[0]
    img2.setAttribute("src",`https://openweathermap.org/img/wn/${filteredForecast[1].weather[0].icon}@2x.png`)
    temp2.textContent=` ${Math.floor(filteredForecast[1].main.temp - 273.15)}c`;
   
    dt3.textContent=filteredForecast[2].dt_txt.split(' ')[0]
    img3.setAttribute("src",`https://openweathermap.org/img/wn/${filteredForecast[2].weather[0].icon}@2x.png`)
    temp3.textContent=` ${Math.floor(filteredForecast[2].main.temp - 273.15)}c`;
    
    dt4.textContent=filteredForecast[3].dt_txt.split(' ')[0]
    img4.setAttribute("src",`https://openweathermap.org/img/wn/${filteredForecast[3].weather[0].icon}@2x.png`)
    temp4.textContent=` ${Math.floor(filteredForecast[3].main.temp - 273.15)}c`;
    
    dt5.textContent=filteredForecast[4].dt_txt.split(' ')[0]
    img5.setAttribute("src",`https://openweathermap.org/img/wn/${filteredForecast[4].weather[0].icon}@2x.png`)
    temp5.textContent=` ${Math.floor(filteredForecast[4].main.temp - 273.15)}c`;



    
       
    
    
    
  } catch (e) {
    console.log("error", e);
  }
};

const search = document.querySelector("#search");
search.addEventListener("click", getWeatherDetailsOfCity);

