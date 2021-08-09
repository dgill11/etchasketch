const defaultsize = 16;
const grid = document.querySelector("#grid");

let defaultcolor = "#000000";

document.getElementById("button1").addEventListener("click", function () {
    if (localStorage == null || localStorage.length == 0) {
        console.log("There is no previously saved grid, so you will be prompted to generate a new one");
        let  input = parseInt(prompt("Enter a number between 2 and 24"));
        if (input > 2 && input <= 24) {
            console.log("generating grid with input: " + input); // Use more descriptive logs, was "eventfired"
            newgrid(input);
            document.getElementById("button1").innerHTML = "Change Dimensions";
            // Button text is changed after initial user input.
        } else {
            alert("Enter a valid input");
            console.log("broken");
            // Logs console if user input is invalid,
        }
    }
});
var logicGrid = [];

if (localStorage.length != 0) {
    load();
}

function newgrid(input) {

    window.logicGrid = logicGrid;

    for (let i = 0; i < input; i++) {
        const rowset = document.createElement("div");
        logicGrid.push([]);

        for (let y = 0; y < input; y++) {
            logicGrid[i].push(null);
            const block = document.createElement("div");
            block.className = "apple";

            block.addEventListener("mouseover", () => {
                console.log(i, y);
                console.log("hovered", logicGrid);
            });
            block.addEventListener("mouseout", () => {
                logicGrid[i][y] = block.style.backgroundColor;
            })
            rowset.appendChild(block);
        }
        grid.appendChild(rowset);
        console.log(logicGrid);
    }
    colorchange();

    // Sending stringified array to localStorage when clicking 
}

function randomcolor() {
    let n = (Math.random() * 0xfffff * 100000).toString(16);
    let color = "#" + n.slice(0, 6); // Use variable declarations, not just something = another thing, use let something or const something =
    return color;
}
// Function that controls the color of the board depending on what is clicked

// Why though? Why not just do this logic inside the block event listener?

function colorchange() {
    items = document.getElementsByClassName("apple");
    console.log(items);
    for (let i = 0; i < items.length; i++) {
        items[i].addEventListener("mouseover", function () {
            items[i].style.background = defaultcolor;
            console.log(items[i]);
            document.getElementById("eraserbutton").addEventListener("click", function () {
                defaultcolor = "#FFFFFF";
                console.log("eraser selected");
            });
        });
    }
    // Changing color each time a new div is hovered over
    document.getElementById("RGB").addEventListener("click", function () {
        console.log("RGB Button Selected");
        for (let x = 0; x < items.length; x++) {
            items[x].addEventListener("mouseover", function () {
                console.log("newcolor");
                randomcolor();
                items[x].style.background = randomcolor();
            });
        }
    });
    document.getElementById("clear1").addEventListener("click", function () {
        for (let y = 0; y < items.length; y++) {
            items[y].style.background = "#FFFFFF";
            console.log("board cleared");
        }
    });
}

function saving() {
    console.log("savebuttonclicked");
    let myJSON = JSON.stringify(logicGrid);
    localStorage.setItem('stringifiedlogicgrid', myJSON);
    console.log(localStorage);
    if (localStorage != null) {
        console.log("There is something saved.");
    }
}

// Saves the grid 

function load() {
    if (localStorage.length != null) {
        var stored = JSON.parse(localStorage.getItem('stringifiedlogicgrid'));
        console.log(stored); 
        var arraylength = stored.length;
        console.log(arraylength);
        newgrid(arraylength);
    }
}

// This function wll get the dimensions of a previously saved grid
