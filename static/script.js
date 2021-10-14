var loader = document.querySelector(".loader")

window.addEventListener("load", vanish);

function vanish() {
    loader.classList.add("disppear");
}

//----------------------------------------------------------------
window.addEventListener("keydown", keyBoard, false);

function keyBoard(key) {
    if (key.keyCode == "38") {
        direction_function('f');
    }
    if (key.keyCode == "40") {
        direction_function('b');
    }
    if (key.keyCode == "37") {
        direction_function('l');
    }
    if (key.keyCode == "39") {
        direction_function('r');
    }
    if (key.keyCode == "65") {
        direction_function('c');
    }
    if (key.keyCode == "83") {
        direction_function('t');
    }
    if (key.keyCode == "32") {
        direction_function('s');
    }
}

function direction_function(direction) {
    if (direction == 'l') {
        console.log("left")
         $(function() {
          $('a#test').on('click', function(e) {
            e.preventDefault()
            $.getJSON("/direction('l')",
                function(data) {
              //do nothing
            });
            return false;
          });
        });
        
    }
    if (direction == 'r') {
        console.log("right")
    }
    if (direction == 'b') {
        console.log("back")
    }
    if (direction == 'f') {
        console.log("front")
    }
    if (direction == 't') {
        console.log("loading")
    }
    if (direction == 's') {
        console.log("stop")
    }
    if (direction == 'c') {
        console.log("collect")
    }
}