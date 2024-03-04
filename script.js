const content = document.querySelector("main");
const header_button = document.querySelector("button");

function createDivElements(squares_per_side = 16)
{
    let single_div;
    let counter;

    counter = 1;

    for(let i = 1 ; i <= squares_per_side ; i++)
    {
        for(let j = 1 ; j <= squares_per_side ; j++)
        {
            single_div = document.createElement("div");
            single_div.style.setProperty("width", `${Math.floor(1 / squares_per_side * 100)}%`);
            single_div.style.setProperty("height",`${Math.floor(1 / squares_per_side * 100)}%`);
            single_div.style.setProperty("background-color", "purple");
            single_div.addEventListener("mouseenter", (e) => e.target.style.setProperty("background-color", "black"));
            content.appendChild(single_div);
            counter++;
        }
    }
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

        if(squares_per_side != -1)
            console.log("Given number is valid!");
        else
            console.log("Given number is NOT valid!");
    });
}

createDivElements();
addClickEventToButton();