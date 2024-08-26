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

document.getElementById("beaches-btn").addEventListener("click", showBeaches);
document.getElementById("sightseeing-btn").addEventListener("click", showSightseeing);
document.getElementById("food-btn").addEventListener("click", showFood);
document.getElementById("shopping-btn").addEventListener("click", showShopping);
document.getElementById("boats-btn").addEventListener("click", showBoats);

function showBeaches()
{
    hideEverything();
    document.getElementById("beaches").classList.add("active-content");
    document.getElementById("beaches").style.display = "grid";
}

function showSightseeing()
{
    hideEverything();
    document.getElementById("sightseeing").classList.add("active-content");
    document.getElementById("sightseeing").style.display = "grid";
}

function showFood()
{
    hideEverything();
    document.getElementById("food").classList.add("active-content");
    document.getElementById("food").style.display = "block";
}

function showShopping()
{
    hideEverything();
    document.getElementById("shopping").classList.add("active-content");
    document.getElementById("shopping").style.display = "block";
}

function showBoats()
{
    hideEverything();
    document.getElementById("boats").classList.add("active-content");
    document.getElementById("boats").style.display = "block";
}

function hideEverything()
{
    let list = document.querySelectorAll(".content");

    for(let i=0; i<list.length; i++)
    {
        list[i].classList.remove("active-content");
        list[i].style.display = "none";
    }
}

document.getElementById("show").addEventListener("click", showHistory);
document.getElementById("hide").addEventListener("click", hideHistory);

function showHistory()
{
    document.getElementById("history").style.display="inline";
    document.getElementById("show").style.display="none";
}

function hideHistory()
{
    document.getElementById("history").style.display="none";
    document.getElementById("show").style.display="inline";
}