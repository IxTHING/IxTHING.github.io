var person1 = {name:"Jordan" , age:"51", occupation:"Job"};

        function sayHello() {
           alert("Hello World")
        }

        function squareNum(num) {
           alert(Math.sqrt(num));
        }

        function addNum(num, num1, num2) {
           alert(num + num1 + num2);
        }

        function createObj(){
            var person = {name:"Jordan" , age:"51", occupation:"Job"};
            alert(person.name + person.age + person.occupation);
        }

        function addObj(){
            person1.age++;
            alert("Age = " + person1.age)
        }


        

        function addNumV2() {
            var test = document.getElementById("testt").value;
           alert(+test + Number(2 + 2));
        }

        function printString() {
            var elliot = "He said \"My name is Elliot\"";
            alert(elliot)
            alert(elliot.toUpperCase());
        }


        function fstArray() {
            var arrayz = ['yo', 'ho', 'mo'];
            arrayz.push('fo');
            arrayz.splice(3,1);
            alert(arrayz);
        }

        function oneToTen() {
            for(var i = 0; i < 11; i++)
            {
                alert(i);
            }
        }

        function fizzBuzz() {
            for(var i = 0; i <= 100; i++)
            {
                if(i % 3 === 0)
                {
                    console.log("Fizz")
                } else if(i % 5 === 0)
                {
                    console.log("Buzz")
                } else {
                   console.log(i);
                }
            }
        }

        function threeDevide() {
            var num = 100;
            while(num > 1)
            {
                console.log(num);
                if(num % 3 === 0)
                {
                    num = num / 3;
                } else if((num + 1) % 3 === 0)
                {
                    num = (num + 1) / 3;
                } else 
                {
                    num = (num - 1) / 3;
                }
            }
        }

        function tripleCounter() {
            var tri1 = "xxxabyyyycd";

            var character; 
            var count = 0;
            var total = 0;

            for(var i = 0; i <= tri1.length; i++)
            {
                
                if(character == tri1.charAt(i))
                {
                    count++;
                } else {
                    count = 0;
                }
                character = tri1.charAt(i);

                if(count > 1)
                {
                    total++;
                }

            }
            alert(total);
        }

        function dom() {
           var para = document.createElement("p");
           var node = document.createTextNode("Hello World.");
           para.setAttribute("id", "p2");
           para.appendChild(node);
           var element = document.getElementById("body1");
           var child = document.getElementById("p1");
           element.insertBefore(para,child);
        }

        function domRemove() {
            var parent = document.getElementById("body1");
            var child = document.getElementsByTagName("p")[0];
            parent.removeChild(child);

         }

         function domChange() {
            document.getElementById("p2").innerHTML = "This has been changed!";
         }







