const content = document.querySelector("main");
const header_button = document.querySelector("button");

function darkenTile(e) {
    let tiles_brightness = e.target.style.filter.match(/[0-9]+/);

    if(tiles_brightness === null)
        tiles_brightness = 100;
    else
        tiles_brightness = Number(tiles_brightness);

    e.target.style.setProperty("filter", `brightness(${tiles_brightness - 10}%)`);
}

function setRandomColor(e) {
    e.target.style.setProperty("background-color", `${'#' + Math.floor(Math.random()*16777215).toString(16)}`);
}

function createDivElements(squares_per_side = 16)
{
    let single_div;
    let divs_container;

    for(let i = 1 ; i <= squares_per_side ; i++)
    {
        divs_container = document.createElement("div");
        divs_container.classList.add("tiles_container");

        for(let j = 1 ; j <= squares_per_side ; j++)
        {
            single_div = document.createElement("div");
            single_div.classList.add("tile");
            single_div.addEventListener("mouseenter", setRandomColor);
            single_div.addEventListener("click", darkenTile);

            divs_container.appendChild(single_div);
        }

        content.appendChild(divs_container);
    }
}

function removeDivElements()
{
    const divs = document.querySelectorAll(".tiles_container");

    divs.forEach(function (e) {
        e.remove();
    })
}

function getSquaresPerSide()
{
    let squares_per_side;
        
    squares_per_side = prompt("Enter the number of squares per side desired");
    squares_per_side = Number.parseInt(squares_per_side);

    if(isNaN(squares_per_side) || squares_per_side <= 0 || squares_per_side > 100)
        return -1;

    return squares_per_side;
}

function addClickEventToButton() {
    header_button.addEventListener("click", function() {
        let squares_per_side;

        squares_per_side = getSquaresPerSide();
        
        if(squares_per_side == -1)
            return;
        else
        {
            removeDivElements();
            createDivElements(squares_per_side);
        }
    });
}

createDivElements();
addClickEventToButton();