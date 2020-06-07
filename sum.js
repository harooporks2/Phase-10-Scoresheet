var playerCount = 8;

table = [];
function init() {   
    for(var X = 0; X < playerCount; X++) {

        table[X] = [];
        
        for(var Y = 0; Y < 10; Y++) {

            var elmntStr = 'cell_'+String.fromCharCode(X+65)+String(Y+1)
            var elmnt = document.getElementById(elmntStr);

            if(elmnt.value == null)
                table[X][Y] = 0;
            else
                table[X][Y] = elmnt.value;
            
            sum(elmntStr);
        }
    }
}

function sum(element) {
    var elmnt = document.getElementById(element);
    var row = Number(element.slice(6))-1;
    var coll = element.slice(5,6);
    var col = coll.charCodeAt()-65;
    table[col][row] = elmnt.value;

    total = 0;

    for(var cell = 0; cell < table[col].length; cell++) {
        total += Number(table[col][cell]);
    }
    document.getElementById('cell_total'+coll).innerText = total;
}