const ribbonContainer = document.querySelector("#ribbon-container");
const carousel = document.querySelector("#carousel");
const resContainer = document.querySelector("#res-container");
async function getData1() {
  try {
    const response = await fetch("data.json");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("error", error);
  }
}

async function getData2() {
  try {
    const response = await fetch("data2.json");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("error", error);
  }
}

async function fetchDetails() {
  const data1 = await getData1();
  const data2 = await getData2();

  const ribbonData = data2.search_result.facet_list[3].values;
  const resDetails = data1.search_result.results;
//   console.log(resDetails);

  ribbonData.map((item) => {
    let id = item.value;
    let src = `./assets/${item.value}.svg`;
    let alt = item.value;
    let name = item.value;

    createRibbonItem(id, src, alt, name);
  });
  carouselTransition();
  resDetails.map(res=>{
    //resId,url,name,rating,time,price
    let resId=res.restaurant_id;
    let url= res.media_image.base_url+res.media_image.public_id
    let name=res.name
    let rating=`${res.ratings.rating_value} (${res.ratings.rating_count})`
    let time=`${res.delivery_estimate_range.start_time_minutes} - ${res.delivery_estimate_range.end_time_minutes}`
    let price=res.price_response.fee_display_setting.search_display_setting.styled_text.text

    console.log("values",resId,url,name,rating,time,price);
    createRestaurantCard(resId,url,name,rating,time,price)
    
  })

}

function createRibbonItem(id, src, alt, name) {
  const div = document.createElement("div");
  div.setAttribute("id", id);
  div.setAttribute("class", "carousel-item");
  const img = document.createElement("img");
  img.setAttribute("class", "ribbon-image");
  img.setAttribute("src", src);
  img.setAttribute("alt", alt);
  const p = document.createElement("p");
  p.textContent = name;
  div.appendChild(img);
  div.appendChild(p);
  carousel.appendChild(div);
}

//carousel functionality
function carouselTransition() {
  const previousButton = document.querySelector("#left-chevron");
  const nextButton = document.querySelector("#right-chevron");
  let index = 0;
  function updateCarousel() {
    index == 0
      ? (previousButton.style.display = "none")
      : (previousButton.style.display = "block");
    index == 9
      ? (nextButton.style.display = "none")
      : (nextButton.style.display = "block");
    const itemWidth = carousel.querySelector(".carousel-item").offsetWidth;
    carousel.style.transform = `translateX(-${index * itemWidth}px)`;
  }
  previousButton.addEventListener("click", () => {
    index = index > 0 ? index - 1 : carousel.children.length - 13;
    updateCarousel();
  });
  nextButton.addEventListener("click", () => {
    index = index < carousel.children.length - 13 ? index + 1 : 0;
    updateCarousel();
  });
  updateCarousel();
}


function createRestaurantCard(resId,url,name,rating,time,price){
    const div= document.createElement("div");
    // div.setAttribute("id",id)
    // const img= document.createElement("img");
    // img.setAttribute("src",src)
    // img.setAttribute("alt",alt)
    // div.appendChild(img);
    // const name= document.createElement("h4");
    // name.textContent=resname
    // const star=document.createElement("span");
    // star.textContent=rating
    const resDiv=` <div id=${resId}>
            <img id="res-image" src=${url} alt="${name}">
            <div id="res-title">
                <i
                class="fa-solid fa-plus"
                style="background-color: yellow; padding: 1px; margin: 1px"
              ></i>
                <h4>${name}</h4>
                <i class="fa-light fa-heart"></i>
            </div>
            <div id="details">
                <i class="fa-solid fa-star"></i>
                <span>${rating} . </span>
                <span>${time} min</span>
            </div>
            <div id="price">
                <span>${price} delivery</span>
            </div>
        </div>`
        div.innerHTML=resDiv;
        resContainer.appendChild(div)
}

fetchDetails();



//completed till displaying res cards but should fix ui