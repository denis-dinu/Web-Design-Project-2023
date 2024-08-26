//the following javascript creates a collapsible for the first section

document.getElementById("show").addEventListener("click", showRoutes);
document.getElementById("hide").addEventListener("click", hideRoutes);

function showRoutes()
{
    document.getElementById("extra").style.display = "block";
    document.getElementById("show").style.display = "none";
}

function hideRoutes()
{
    document.getElementById("extra").style.display = "none";
    document.getElementById("show").style.display = "block";
}

//the following javascript adds a "great deal" indication for hotels that have good prices for their ratings

let hotels = document.querySelectorAll(".hotel");
for(let i=0; i<hotels.length; i++)
{
    let price = Number(hotels[i].getAttribute("data-price")); //price of each hotel stored in data-price attribute and we must convert it to a number
    let rating = Number(hotels[i].getAttribute("data-rating")); //price of each hotel stored in data-rating attribute and we must convert it to a number

    if((rating===4 && price<=75) || (rating===3 && price<=55))
    {
        let children = hotels[i].children;
        children[1].style.display = "block"; //make the indication visible if rating/price ratio is good enough
    }
}

//the following javascript filters hotels based on user's selection

document.getElementById("filter").addEventListener("click", filterHotels)

function filterHotels()
{
    let input_price = document.querySelector('input[name="price"]:checked'); //get the checked price radio button
    let input_location = document.querySelector('input[name="location"]:checked'); //get the checked location radio button
    let input_rating = document.querySelector('input[name="rating"]:checked'); //get the checked rating radio button
 
    let selected_price = null; 
    let selected_location = null; 
    let selected_rating = null;  //initialize selections to null

    if(input_price !== null) //checking if a price radio button has been checked
    {
        selected_price = input_price.value; //if so, change selected price to the value of the checked button
    }
    //doing the same for location and rating
    if(input_location !== null)
    {
        selected_location = input_location.value;
    }

    if(input_rating !== null)
    {
        selected_rating = input_rating.value;
    }

    let hotel_list = document.querySelectorAll(".hotel"); //making a list of all the hotels
    let hotels_not_shown = 0; //a variable to count how many hotels were hidden

    for(let i=0; i<hotel_list.length; i++) //iterating over all hotels
    {
        let price = Number(hotel_list[i].getAttribute("data-price"));
        let location = hotel_list[i].getAttribute("data-location");
        let rating = Number(hotel_list[i].getAttribute("data-rating"));
        //getting price, location abd rating for the current hotel

        hotel_list[i].style.display = "block"; //we show the hotel at first

        if(selected_price != null && price > selected_price) //if a price button has been checked and price of current hotel is more than threshold
        {
            hotel_list[i].style.display = "none"; //hide
        }
        
        if(selected_location !== "any" && selected_location !== null && selected_location != location) //if a location button has been checked and it wasn't the any location button and the location of current hotel is not the selected location
        {
            hotel_list[i].style.display = "none"; //hide
        }

        if(selected_rating != null && rating < selected_rating) //if a rating button has been checked and rating of current hotel is less than threshold
        {
            hotel_list[i].style.display = "none"; //hide
        }

        if(hotel_list[i].style.display === "none") //if hotel was hidden increment count of hidden hotels
        {
            hotels_not_shown += 1;
        }
    }

    if(hotels_not_shown === hotel_list.length) //show a message if all hotels were hidden
    {
        document.getElementById("message").style.display = "block";
    }
    else
    {
        document.getElementById("message").style.display = "none";
    }

    
}