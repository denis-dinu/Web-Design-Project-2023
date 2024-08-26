let expand_buttons = document.getElementsByClassName("expand");
let collapse_buttons = document.getElementsByClassName("collapse");

for (let i=0; i<expand_buttons.length; i++) //iterate over the sections in the page
{
    expand_buttons[i].addEventListener("click", function () {
        expand(i+1); //sections go from 1 to 3
    })
}

for (let i=0; i<collapse_buttons.length; i++) //iterate over the sections in the page
{
    collapse_buttons[i].addEventListener("click", function () {
        collapse(i+1); //sections go from 1 to 3
    })
}


function expand(section)
{
    document.getElementById("extra"+section).style.display = "block"; //make extra info of corresponding section visible
    expand_buttons[section-1].style.display = "none"; //hide the expand button of the corresponding section 
}

function collapse(section)
{
    document.getElementById("extra"+section).style.display = "none"; //hide extra info of corresponding section
    expand_buttons[section-1].style.display = "block"; //make the expand button of the corresponding section visible
}

//functions expand and collapse each take in the section on which they are called to operate

