const defaultsize = 16; 
const grid = document.querySelector('#grid');

defaultcolor = "#000000";

document.getElementById("button1").addEventListener("click", function() {
    var input = parseInt(prompt("Enter a number between 2 and 24"));
    if (input >2 && input <=24) {
        newgrid(input);
        console.log("eventfired");
        document.getElementById("button1").innerHTML = "Change Dimensions";
    }
    else {
        alert("Enter a valid input");
        console.log("broken");
    }
});

function newgrid(input) {
    const logicGrid = new Array(input).fill(new Array(input).fill(null));
    console.log(logicGrid);
    console.log("eventfired2");
    for (let i = 0; i < input; i++) {
        const rowset = document.createElement('div');
        grid.appendChild(rowset);
        console.log("eventfired3")
        for (let y = 0; y < input; y++ ) {
            const block = document.createElement('div');
            block.className = "apple";
            rowset.appendChild(block);
        }
    }
    colorchange();   
}

function randomcolor() {
    let n = (Math.random() * 0xFFFFF * 100000).toString(16);
    color = "#" + n.slice(0, 6);
    console.log(color);
    return color;
}

function colorchange() {
    items = document.getElementsByClassName("apple");
    console.log(items);
    for (let i = 0; i < items.length; i++) {
        console.log("eventfired5");
        items[i].addEventListener("mouseover", function() {
            items[i].style.background = defaultcolor;
            console.log(items[i]);
            document.getElementById("eraserbutton").addEventListener("click", function() {
                defaultcolor = "#FFFFFF"
                console.log("eraser selected");
            })
        })
    }
    document.getElementById("RGB").addEventListener("click", function() {
        for (let x = 0; x < items.length; x++) {
            items[x].addEventListener("mouseover", function() {
                console.log("newcolor");
                randomcolor();
                items[x].style.background = randomcolor();
            })
        }
    })
}
