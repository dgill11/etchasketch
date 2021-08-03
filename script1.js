let deleting = document.getElementById("button2");
let textfield = document.getElementById("class12");
let tdlist = [];
let list12 = document.getElementById("todolist");

// Declaring variables

function savingstorage() {
    let gettinguserinfo = localStorage.getItem("newlistitem");
    if (gettinguserinfo == null)
    {
        tdlist = [];
    }
    else 
    {
        tdlist = JSON.parse(gettinguserinfo);
    }
    tdlist.push(empt);
    localStorage.getItem("newlistitem", JSON.stringify(tdlist));
    for (var i = 0; i < tdlist. length; i ++)
    {
        var empt = document.getElementById("class12").value;
        let li1 = document.createElement("li");
        li1.innerHTML = empt;
        console.log(list12);
        list12.appendChild(li1);
    }
}

function errorcheck() {
    var empt = document.getElementById("class12").value;
    if (empt.length == 0) {
        alert("Fill all fields.");
        return false;
    }
    return true;
}

// Checking if there is a user input.

function mainadd1() {
    const toContinue = errorcheck();
    if (toContinue) {
        savingstorage();
        clearingtext1();
    }
}

// Main function which is executed onclick.

function clearingtext1() {
    document.getElementById("class12").value = " ";
}

// Clears text after input is entered. 