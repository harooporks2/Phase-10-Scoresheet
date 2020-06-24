function init() {   
    
    var playerCount = 8;    
    table = [];//Empyty array to hold scores.

    for(var X = 0; X < playerCount; X++) {

        table[X] = [];//Insert empty arrays to act as collumns.
        var elmntStr;

        for(var Y = 0; Y < 10; Y++) {

            elmntStr = 'cell_'+String.fromCharCode(X+65)+String(Y+1)//Generate element ID string.
            var elmnt = document.getElementById(elmntStr);

            if(elmnt.value == null)
                table[X][Y] = 0;//If the cell is empty, set to zero...
            else
                table[X][Y] = elmnt.value;//...otherwise use the scoreboard value.   
        }
        
        sum(elmntStr);//Sum the values in each collum
    }
}
        
function sum(element) {
    var elmnt = document.getElementById(element);
    var row = Number(element.slice(6))-1;
    var coll = element.slice(5,6);
    var col = coll.charCodeAt()-65;
    table[col][row] = elmnt.value;//Set selected cell's table value to it's element value.

    total = 0;//Reset the total value.

    for(var cell = 0; cell < table[col].length; cell++) {
        total += Number(table[col][cell]);//Sum all of the cells in the selected collumn.
    }
    document.getElementById('cell_total'+coll).innerText = total;//Show the total value in the HTML.
}