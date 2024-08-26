let buttons = document.getElementById("buttons").children;

for(let i=0; i<buttons.length; i++)
{
    buttons[i].addEventListener("click", highlightButton);
}

function highlightButton()
{
    for(let i=0; i<buttons.length; i++)
    {
        buttons[i].classList.remove("active-btn");
    }
    this.classList.add("active-btn");
}

document.getElementById("hotels-btn").addEventListener("click", showHotels);
document.getElementById("beaches-btn").addEventListener("click", showBeaches);
document.getElementById("shops-btn").addEventListener("click", showShops);
document.getElementById("restaurants-btn").addEventListener("click", showRestaurants);


function showHotels()
{
    hideEverything();
    document.getElementById("map-hotels").classList.add("active-map");
    document.getElementById("map-hotels").style.display = "block";
}

function showBeaches()
{
    hideEverything();
    document.getElementById("map-beaches").classList.add("active-map");
    document.getElementById("map-beaches").style.display = "block";
}

function showShops()
{
    hideEverything();
    document.getElementById("map-shops").classList.add("active-map");
    document.getElementById("map-shops").style.display = "block";
}

function showRestaurants()
{
    hideEverything();
    document.getElementById("map-restaurants").classList.add("active-map");
    document.getElementById("map-restaurants").style.display = "block";
}

function hideEverything()
{
    let list = document.querySelectorAll(".map");

    for(let i=0; i<list.length; i++)
    {
        list[i].classList.remove("active-map");
        list[i].style.display = "none";
    }
}