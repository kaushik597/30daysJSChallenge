const ribbonContainer = document.querySelector("#ribbon-container");
const carousel = document.querySelector("#carousel");
const resContainer = document.querySelector("#res-container");
const cuisineContainer = document.querySelector("#cuisine-container");
const restaurantTitle = document.querySelector("#res-menu-title");
const ratingContainer = document.querySelector("#rating-container");
const feedbackContainer = document.querySelector("#feedback-container");
const typeContainer = document.querySelector("#type-container");
const categoryContainer = document.querySelector("#category-container");
const menuItems = document.querySelector("#items");
const cart= document.querySelector("#cart")
const cartPageDetails= document.querySelector("#cart-details");
const cartPageCard= document.querySelector("#cart-card")
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
  resDetails.map((res) => {
    //resId,url,name,rating,time,price
    let resId = res.restaurant_id;
    let url = res.media_image.base_url + res.media_image.public_id;
    let name = res.name;
    let rating = `${res.ratings.rating_value} (${res.ratings.rating_count})`;
    let time = `${res.delivery_estimate_range.start_time_minutes} - ${res.delivery_estimate_range.end_time_minutes}`;
    let price =
      res.price_response.fee_display_setting.search_display_setting.styled_text
        .text;

    console.log("values", resId, url, name, rating, time, price);
    createRestaurantCard(resId, url, name, rating, time, price);
  });
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

function createRestaurantCard(resId, url, name, rating, time, price) {
  const div = document.createElement("div");
  const resDiv = `<a href="menu.html">
            <div id=${resId}>
            <img id="res-image" src=${url} alt="${name}">
            <div id="res-title">
                <i
                class="fa-solid fa-plus"
                style="background-color: yellow; padding: 1px; margin: 1px"
              ></i>
                <h4>${name}</h4>
                <i class="fa-regular fa-heart"></i>
            </div>
            <div id="details">
                <i id="star" class="fa-solid fa-star"></i>
                <span id="rating">${rating}</span>
                <span id="dot">.</span>
                <span id="time">${time} min</span>
            </div>
            <div id="price">
                <span>${price} delivery</span>
            </div>
        </div>
        </a>`;
  div.innerHTML = resDiv;
  resContainer.appendChild(div);
}

async function showCuisineData() {
  const resData = await fetch("restaurantMenu.json");
  const data = await resData.json();
  const cuisineData = data.restaurant_data.restaurant.cuisines;
  const title = data.restaurant_data.restaurant.name;
  const rating = data.restaurant_data.restaurant.rating.rating_value;
  const rating_count = data.restaurant_data.restaurant.rating.rating_count;
  const address = data.restaurant_data.restaurant.address.street_address;
  const phone = data.restaurant_data.restaurant.phone_number_for_delivery;
  const goodFood = `${data.restaurant_data.restaurant.faceted_rating_data.faceted_rating_list[2].positive_response_count}% Good food `;
  const onTimeDelivery = `${data.restaurant_data.restaurant.faceted_rating_data.faceted_rating_list[0].positive_response_count}% On time delivery `;
  const correctOrder = `${data.restaurant_data.restaurant.faceted_rating_data.faceted_rating_list[1].positive_response_count}% Correct order `;
  console.log(
    "res data",
    cuisineData,
    title,
    rating,
    rating_count,
    address,
    phone,
    goodFood,
    onTimeDelivery,
    correctOrder
  );

  cuisineData.map((cuisine) => {
    const p = document.createElement("p");
    p.setAttribute("class","cuisine")
    p.textContent = `${cuisine} , `;
    cuisineContainer.appendChild(p);
  });

  const h1 = document.createElement("h1");
  h1.textContent = title;
  restaurantTitle.appendChild(h1);

  const starRating = document.createElement("p");
  starRating.textContent = rating+" . ";

  const starRatingCount = document.createElement("p");
  starRatingCount.textContent = rating_count+" ratings . ";

  const addressData = document.createElement("p");
  addressData.textContent = address+" . ";

  const phoneData = document.createElement("p");
  phoneData.textContent = phone;

  ratingContainer.appendChild(starRating);
  ratingContainer.appendChild(starRatingCount);
  ratingContainer.appendChild(addressData);
  ratingContainer.appendChild(phoneData);

  const good = document.createElement("p");
  good.textContent = goodFood;
  const ontime = document.createElement("p");
  ontime.textContent = onTimeDelivery;
  const correct = document.createElement("p");
  correct.textContent = correctOrder;

  feedbackContainer.appendChild(good);
  feedbackContainer.appendChild(ontime);
  feedbackContainer.appendChild(correct);

  console.log("menu items", data.menu_items);

  let cartItems=[]

  data.menu_items.map((item) => {
    const itemCard = document.createElement("div");
    itemCard.setAttribute("class", "item-card");

    const img = document.createElement("img");
    img.setAttribute(
      "src",
      item.media_image.base_url + item.media_image.public_id
    );
    img.setAttribute("alt", item.name);
    img.setAttribute("class", "item-image");

    itemCard.appendChild(img);

    const namedDiv = document.createElement("div");
    namedDiv.setAttribute("class", "item-details");
    const name = document.createElement("h4");
    name.textContent = item.name;
    namedDiv.appendChild(name);

    const desc = document.createElement("p");
    desc.textContent = item.description;
    namedDiv.appendChild(desc);

    const price = document.createElement("p");
    price.textContent = item.maximum_price_variation.styled_text.text;
    namedDiv.appendChild(price);
    itemCard.appendChild(namedDiv);

    const btn = document.createElement("button");
    btn.setAttribute("id", item.name);
    btn.textContent = "Add to cart";
    namedDiv.appendChild(btn);

    menuItems.appendChild(itemCard);
    btn.addEventListener("click",(e)=>{
      console.log("button clicked",name.textContent);
      // showCartCount(cartItems,)
      cartItems.push(item)
      console.log(cartItems);

      cart.textContent=cartItems.length

      localStorage.setItem("cart",JSON.stringify(cartItems))



    })


    
   
  });


  

}

fetchDetails();
showCuisineData();
// createCartCard(cartItems)

// function showCartCount(cartItem,item,price){
//   cartItems.push({item:price})

  

// }

//completed till displaying menu items now i have to work on adding to cart and payment functionality


 function createCartCard(){
  const cartData=JSON.parse(localStorage.getItem("cart"));
      
  console.log("cart data",cartData);

      cartData.map(item=>{
        let url=item.media_image.base_url+item.media_image.public_id
        let name = item.name
        let price= parseInt(item.price.amount)/100
        console.log(url,name, price);
        
      let cardItems=`<img class="cart-img" src="${url}" alt="${name}"/>
                  <p class="cart-item-name">${name}</p>
                  <p class="cart-price">${price}</p>`;
                  
        cartPageCard.innerHTML=cardItems
        console.log(cartPageCard);

        console.log(cartPageCard);
        
      })
      cartPageDetails.appendChild(cartPageCard)

    
    
    }
createCartCard()



//working on cart page if i show the data properly most of the work will be completed i should just calculate the price and submit for checkout and implement a form for payment i might not do the payment part
