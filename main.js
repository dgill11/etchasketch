const defaultsize = 16;
const grid = document.querySelector("#grid");

defaultcolor = "#000000";

document.getElementById("button1").addEventListener("click", function () {
    var input = parseInt(prompt("Enter a number between 2 and 24"));
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
});

function newgrid(input) {
    const logicGrid = [];

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
                logicGrid[i][y] = 0;
                console.log("hovered", logicGrid);
                block.style.backgroundColor = "#000";
            });

            rowset.appendChild(block);
        }

        grid.appendChild(rowset);
    }

    // Sending stringified array to localStorage when clicking 
    function saving() {
        console.log("savebuttonclicked");
        let myJSON = JSON.stringify(logicGrid);
        localStorage.setItem('stringifiedlogicgrid', myJSON);
        console.log(localStorage);
        if (localStorage != null) {
            console.log("There is something saved.");
        }
    }

    if (localStorage == null) {
        // Checks if the storage is already empty, and then proceedes to autosave it if it is empty;
        window.onbeforeunload = () => {
        saving();
        alert("Your drawing has been autosaved.");
        }
    }
}

function randomcolor() {
    let n = (Math.random() * 0xfffff * 100000).toString(16);
    color = "#" + n.slice(0, 6); // Use variable declarations, not just something = another thing, use let something or const something =
    return color;
}
// Function that controls the color of the board depending on what is clicked

// Why though? Why not just do this logic inside the block event listener?

function colorchange() {
    items = document.getElementsByClassName("apple");
    console.log(items);
    for (let i = 0; i < items.length; i++) {
        console.log("eventfired5");
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

// Changing the whole board and its divs to white
