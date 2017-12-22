var superHeroes;

function json()
{
    var requestURL = 'https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json';
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json'
    request.send();
    request.onload = function () {
    superHeroes = request.response;
    //do stuff with superHeroes
    console.log(superHeroes);
    console.log(superHeroes.members[0]);
    console.log(superHeroes.members[1]);
    console.log(superHeroes.members[2]);
    }
    
}

var count = 0;

function addHeroes(num) {

    
    if(count > 0)
    {
        remove();
    }

    var para = document.createElement("h3");
    var node = document.createTextNode(superHeroes.members[num].name);
    para.setAttribute("id", "s0Name");
    para.appendChild(node);
    var element = document.getElementById("superHeroes");
    var child = document.getElementById("s0Name");
    element.insertBefore(para,child);

    var para = document.createElement("p");
    var node = document.createTextNode(superHeroes.members[num].age);
    para.setAttribute("id", "s0Age");
    para.appendChild(node);
    var element = document.getElementById("superHeroes");
    var child = document.getElementById("s0Age");
    element.insertBefore(para,child);

    var para = document.createElement("p");
    var node = document.createTextNode(superHeroes.members[num].secretIdentity);
    para.setAttribute("id", "s0Secret");
    para.appendChild(node);
    var element = document.getElementById("superHeroes");
    var child = document.getElementById("s0Secret");
    element.insertBefore(para,child);

    var para = document.createElement("p");
    var node = document.createTextNode(superHeroes.members[num].powers[0]);
    para.setAttribute("id", "s0Powers");
    para.appendChild(node);
    var element = document.getElementById("superHeroes");
    var child = document.getElementById("s0Powers");
    element.insertBefore(para,child);
 
    count++;
}

function searchHeroes() {
    var name = document.getElementById("heroBox").value;
    var na = name.charAt(0) + name.charAt(1) + name.charAt(2);
    for(var i = 0; i < superHeroes.members.length; i++){
        if(superHeroes.members[i].name.includes(na))
        {
            addHeroes(i);
            break;
        }

    }
    
}

function remove() {
    var parent = document.getElementById("superHeroes");
    var child = document.getElementById("s0Name");
    var child1 = document.getElementById("s0Powers");
    var child2 = document.getElementById("s0Secret");
    var child3 = document.getElementById("s0Age");
    parent.removeChild(child);
    parent.removeChild(child1);
    parent.removeChild(child2);
    parent.removeChild(child3);
 }