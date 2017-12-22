'use strict';

function rectangle() {
    var word = "REKTEDOID";
    var wordArray = [];
    for(var i = 0; i < word.length; i++)
    {
        wordArray.push(word.charAt(i));
    }

    alert(wordArray);
    
    var shape = "\n";
    var row = 0;
    var count = 0;

    var space = "       ";

    while(row < word.length)
    {
        for(var i = 0; i < word.length; i++) {
            if(row == 0) {
                shape += wordArray[i];
            } 
            if(row > 0 && row < word.length -1) {
                shape += "\n" + wordArray[row] + space + wordArray[word.length - row - 1];
                row++;
            } 
        }
        row++;
    }

    for(var j = word.length-1; j >= 0; j--) {
        
        if(count == 0) {
            shape += "\n" + wordArray[j];
            count = 1;
        } else {
            shape += wordArray[j];
        }
    } 
    print(shape);
}

function print(shape) {
    var elem = document.getElementById("textRect");
    elem.innerHTML += shape;
}