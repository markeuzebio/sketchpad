const content = document.querySelector("main");

function createDivElements()
{
    let single_div;

    for(let i = 1 ; i <= 16 ; i++)
    {
        for(let j = 1 ; j <= 16 ; j++)
        {
            single_div = document.createElement("div");
            single_div.style.setProperty("width", `${Math.floor(1 / 16 * 100)}%`);
            single_div.style.setProperty("height",`${Math.floor(1 / 16 * 100)}%`);
            single_div.style.setProperty("background-color", "purple");
            content.appendChild(single_div);
        }
    }
}

createDivElements();