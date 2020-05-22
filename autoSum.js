// Create an array for every colum.
var columA = [];
var columB = [];
var columC = [];
var columD = [];
var columE = [];
var columF = [];
var columG = [];
var columH = [];

var table = [columA, columB, columC, columD, columE, columF, columG, columH];// Put all of the colums in an array creating the table as a two dimensional array.
var totals = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H"];// Create alphabet array to iterate through.

var sum = setInterval(function(){
    for(var colum = 0; colum < table.length; colum++) {
        
        totals[colum] = 0;//Reset colum total.
        
        for(var cell = 0; cell < 10; cell++) {
            
            table[colum][cell] = Number(document.getElementById("cell_"+alphabet[colum]+(cell+1)).value);// Set the cell values based on the user's input.
            totals[colum] += table[colum][cell];// Update the total value for each colum.
        }
        document.getElementById("cell_total"+alphabet[colum]).innerHTML = totals[colum];// Show the total value in the HTML.
    }
},500);