const input= document.querySelector("#movieInput");
const search= document.querySelector("#search");
const container= document.querySelector('.movieContainer');
let cityName;
let textContentOfMovieName;
const movieResContainer = document.querySelector('.movieResults')

let apikey=`your api key`
input.addEventListener("keyup",searchMovie)

async function searchMovie(){
const resp=await fetch(`https://www.omdbapi.com/?t=${input.value}&apikey=${apikey}`)
const data = await resp.json();
console.log(data);

const childElement = document.createElement("div");
childElement.setAttribute("id",data.imdbID)
childElement.textContent=data.Title;
// childElement.append(movieName);
container.append(childElement)

console.log(childElement);

}

// console.log(document.querySelector("div"))
//to select the user choice movie
const div= document.querySelector(".movieContainer")
div.addEventListener("click",(event)=>{
const clickedDiv= event.target;
textContentOfMovieName = clickedDiv.textContent    
console.log("clicked div", textContentOfMovieName);
textContentOfMovieName= textContentOfMovieName.trim();
div.innerHTML='';
input.value=textContentOfMovieName;

    
})


//search for details of movie

search.addEventListener("click",getMovieDetails)

async function getMovieDetails(){
    movieResContainer.innerHTML='';
    const resp=await fetch(`https://www.omdbapi.com/?t=${textContentOfMovieName}&apikey=b98c8625`);
    const data = await resp.json();
    console.log("movie data", data);

    //title
    //poster
    //release year
    const title= data.Title
    const src= data.Poster
    const year= data.Year
    const plot= data.Plot
    const dir= data. Director
    const act= data.Actors
    const genre= data.Genre
    const language = data.language
    const awards= data.Awards
    console.log(title, src, year);
    

    // const h2= document.createElement("h2");
    // h2.textContent=title;
    // const img = document.createElement("img");
    // img.setAttribute("src",src);
    // const yea = document.createElement("h2");
    // yea.textContent=year

    // movieResContainer.appendChild(h2)
    // movieResContainer.appendChild(img)
    // movieResContainer.appendChild(yea)
    movieResContainer.innerHTML=`
    <img src=${src} id="img">
    <div id="resContainer">
      <h4>Movie name:<span> ${title}</span></h4>
      <h4>Year: <span>${year}</span></h4>

      <div class="viewMore">
        <h4>Plot:<span> ${plot}</span></h4>
        <h4>Director:<span>${dir}</span></h4>
        <h4>Actors: <span>${act}</span></h4>
        <h4>Genre: <span>${genre}</span></h4>
        <h4>Language: <span>${language}</span></h4>
        <h4>Awards: <span>${awards}</span></h4>



      </div>
              <button id="moreBtn">view more</button>

    </div>`

    const morebtn= document.querySelector('#moreBtn')
    morebtn.addEventListener("click",(event)=>{
        const moreInfo= document.querySelector(".viewMore");
        moreInfo.style.display="block";
        const btn= document.querySelector("#moreBtn");
        btn.style.display="none"
    })




 
}




