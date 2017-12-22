'use strict';

var garageContents = [];
var totalCost = 0;

function addCar(make, reg, colour)
{
    var carFault = [];

    var car = {
        make,
        reg,
        colour,
        carFault,
        totalCost
    };
    garageContents.push(car);

    totalCostOfCar();

    console.log(garageContents);
}

function removeCar(reg)
{
    for(var i = 0; i < garageContents.length; i++)
    {
        if(garageContents[i].reg == reg)
        {
            garageContents.splice(i,1);
        }
    }
    console.log(garageContents);
}

function addCarElement()
{
    var make = document.getElementById("makeText").value;
    var reg = document.getElementById("regTextIn").value;
    var colour = document.getElementById("colourText").value;
    addCar(make,reg,colour);
}

function removeCarElement()
{
    var reg = document.getElementById("regTextOut").value;
    removeCar(reg);
}

function currentContents()
{
    removeCurrentContents()

    for(var i = 0; i < garageContents.length; i++)
    {
        var para = document.createElement("p");
        var node = document.createTextNode(garageContents[i].make + garageContents[i].reg + garageContents[i].colour + garageContents[i].totalCost + garageContents[i].carFault);
        para.setAttribute("id", "garageContentsPara");
        para.appendChild(node);
        var element = document.getElementById("garageDiv");
        var child = document.getElementById("garageContentsPara");
        element.insertBefore(para,child);
    }
    console.log(garageContents);
}

function totalCostOfCar()
{
    for(var i = 0; i < garageContents.length; i++)
    {
        if(garageContents[i].colour == "red"){
            garageContents[i].totalCost = 10; 
        } else {
            garageContents[i].totalCost = 20; 
        }
    }
}

function removeCurrentContents()
{
    var parent = document.getElementById("garageDiv");

    parent.innerHTML = '';
}

function addFault()
{
    var fault = document.getElementById("faultDropDown").value;
    var reg = document.getElementById("regTextFault").value;
    for(var i = 0; i < garageContents.length; i++)
    {
        if(garageContents[i].reg == reg)
        {
            garageContents[i].carFault.push(fault);
        }
    }
}

function removeFault()
{
    var fault = document.getElementById("removeFaultDropDown").value;
    var reg = document.getElementById("removeRegTextFault").value;

    for(var i = 0; i < garageContents.length; i++)
    {
        if(garageContents[i].reg == reg)
        {
            for(var j = 0; j < garageContents[i].carFault.length; j++)
            {
                if(garageContents[i].carFault[j] == fault)
                {
                    garageContents[i].carFault.splice(j, 1)
                }
            }
        }
    }
}