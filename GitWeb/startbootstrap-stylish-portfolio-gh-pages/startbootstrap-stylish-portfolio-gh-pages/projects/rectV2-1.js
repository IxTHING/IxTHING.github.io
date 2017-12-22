'use strict';

function rectangleV2() {
    var word = "REKT";
    var wordArray = [];
    var width = 2;
    var height = 2;

    for(let i = 0; i < word.length; i++)
    {
        wordArray.push(word.charAt(i));
    }
    
    var shape = "\n";
    var row = 0;
    var count = 0;
    var space = "  ";

    width = word.length * width;
    height = word.length * height;

    while(row < height)
    {
        if(row == 0) {
            //for(let i = 0; i < word.length; i++)
            //{
            //    shape += wordArray[i];
            //}
            for(let i = word.length - 1; i > 1; i--)
            {
                shape += wordArray[i];
            }
            
        }
        row++;
    }

    printV2(shape);
}

function printV2(shape) {
    var elem = document.getElementById("textRect");
    elem.innerHTML += shape;
}

