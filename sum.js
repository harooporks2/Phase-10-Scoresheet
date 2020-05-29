var playerCount = 8;

table = [];

for(var X = 0; X < playerCount; X++) {
    table[X] = [];
    for(var Y = 0; Y < 10; Y++) {
        table[X][Y] = 0
    }
}

function sum(element) {
    var elmnt = document.getElementById(element);
    var row = Number(element.slice(6))-1;
    var coll = element.slice(5,6);
    var col = element.slice(5,6).charCodeAt()-65;
    table[col][row] = elmnt.value;

    total = 0;

    for(var cell = 0; cell < table[col].length; cell++) {
        total += Number(table[col][cell]);
    }
    document.getElementById('cell_total'+coll).innerHTML = total;
}