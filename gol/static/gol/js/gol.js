function toggle_cell(id) {
    elem = $("#" + String(id))
    var classes = elem.attr("class").split(/\s+/);
    var alive_index = classes.indexOf("alive");
    if (alive_index == -1) {
        elem.removeClass("btn-danger");
        elem.removeClass("dead");
        elem.addClass("btn-success");
        elem.addClass("alive");
    }
    else {
        elem.removeClass("btn-success");
        elem.removeClass("alive");
        elem.addClass("btn-danger");
        elem.addClass("dead");
    }
}


function step() {
    // TODO: Run 1 iteration of the game of life on the board
    console.log("step");
}


function go(steps) {
    console.log("go");
    for (var i = 0; i < steps; i++) {
        step();
    }
}


function reset() {
    // TODO: Reset the board
    console.log("reset");
}


function generate_puzzle(seed) {
    // TODO: Generate a puzzle using the seed
    // Generate a starting state and number of steps
    // Play out the game for that many steps to get
    // the end solution. Populate the solution board.
}
