var columA = [];
var columB = [];
var columC = [];
var columD = [];
var columE = [];
var columF = [];
var columG = [];
var columH = [];

var table = [columA, columB, columC, columD, columE, columF, columG, columH];
var totals = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H"];

var sum = setInterval(function(){
    for(var colum = 0; colum < table.length; colum++) {
        
        totals[colum] = 0;
        
        for(var cell = 0; cell < 10; cell++) {
            
            table[colum][cell] = Number(document.getElementById("cell_"+alphabet[colum]+(cell+1)).value);
            console.log(typeof totals[colum]);
            console.log(typeof table[colum][cell]);

            totals[colum] += table[colum][cell];
        }
        document.getElementById("cell_total"+alphabet[colum]).innerHTML = totals[colum];
    }
},500);