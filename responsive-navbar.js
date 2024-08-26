/*the purpose of this javascript is to make the navbar become a dropdown menu for smaller screen sizes*/

let w = window.innerWidth; //variable w will hold the width of the window

if(w<900) //checking if the page loads on a smaller screen size
{
    document.getElementById("navbar").addEventListener("mouseover", show_navbar);
    document.getElementById("navbar").addEventListener("mouseleave", hide_navbar);
}

window.addEventListener("resize", checkwidth); //whenever the window size changes we check its width to change the navbar if necessary

function checkwidth()
{
    w = window.innerWidth;
    if(w<900)
    {
        document.getElementById("navbar").addEventListener("mouseover", show_navbar); //don't want the event listeners associated with the navbar when screen size is big enough
        document.getElementById("navbar").addEventListener("mouseleave", hide_navbar);
    }
    else
    {
        document.getElementById("navbar").removeEventListener("mouseover", show_navbar);
        document.getElementById("navbar").removeEventListener("mouseleave", hide_navbar);
        let nav_list = document.querySelectorAll("#navbar>a");
        for (let i=0; i<nav_list.length; i++)
        {
            nav_list[i].removeAttribute("style"); //this was needed because the style attribute would take priority over other css rules in external css files
                                                  //and if the window width is more than 900 we don't want that
        }
    }
}

function show_navbar() //making the entire menu visible only on mouseover
{
    let nav_list = document.querySelectorAll("#navbar>a");
    for (let i=0; i<nav_list.length; i++)
    {
        nav_list[i].style.display = "block";
    }
}

function hide_navbar() //hiding all the links in the navbar except for the title and current page link on mouseleave
{
    let nav_list = document.querySelectorAll("#navbar>a");
    for (let i=0; i<nav_list.length; i++)
    {
        nav_list[i].style.display = "none";
    }

    document.getElementById("title").style.display = "block";
    document.getElementById("nav-active").style.display = "block";
}