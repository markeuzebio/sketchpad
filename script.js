const content = document.querySelector("main");

function createDivElements()
{
    let single_div;
    let counter;

    counter = 1;

    for(let i = 1 ; i <= 16 ; i++)
    {
        for(let j = 1 ; j <= 16 ; j++)
        {
            single_div = document.createElement("div");
            single_div.style.setProperty("width", `${Math.floor(1 / 16 * 100)}%`);
            single_div.style.setProperty("height",`${Math.floor(1 / 16 * 100)}%`);
            single_div.style.setProperty("background-color", "purple");
            single_div.addEventListener("mouseenter", (e) => e.target.style.setProperty("background-color", "black"));
            content.appendChild(single_div);
            counter++;
        }
    }
}

createDivElements();