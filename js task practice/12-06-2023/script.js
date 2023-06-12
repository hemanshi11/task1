    document.write('<h1>sort  method</h1>')

var number = [1, 12, 2, 23, 77, 7, 33, 5, 99, 234];
        var text = number.sort((a, b) => {
            return a - b;
        });

        var result = text.join(", "); // Join the sorted array elements with a comma and space

        document.write(result + '</br>');

        // Code example 2
        var p = ['a', 'z', 'e', 'y'];
        p.sort();
        document.write(p + '</br>');

        // Code example 3
        document.write('<h1>Reduce Method</h1>');

        var numbers = [1, 2, 3, 4, 5, 6];
        const total = numbers.reduce((value, total) => {
            return total + value;
        });
        document.write(total + '</br>');

        // Code example 4
        function addNumbers(numbers) {
            var sum = 0;
            for (var i = 0; i < numbers.length; i++) {
                sum += numbers[i];
            }
            return sum;
        }

        var numbers = [1, 2, 3, 4, 5];
        var result = addNumbers(numbers);
        document.write(result + "</br>");

        // Code example 5
        var animals = [
            { name: "Jason", species: "rabbit" },
            { name: "Jessica", species: "dog" },
            { name: "Jacky", species: "owl" },
            { name: "Luke", species: "fish" },
            { name: "Junior", species: "rat" },
            { name: "Thomas", species: "cat" }
        ];

        const animal = animals.filter(myfunc);

        function myfunc(item) {
            if (item.species === 'dog') {
                return true;
            }
        }

        var output = document.getElementById('output');
       
        output.innerHTML = JSON.stringify(animal);


    document.write('<h1> reverse method</h1>')
        var string = "Welcome to MRS Wrold(Mehul,Ravi,Sagar)";
        var reversedString = string.split("").sort().reverse().join("");
        document.write(reversedString + '</br>');

        document.write('<h1>convert firstletter in uppercase</h1>')
        var string = "welcome to MRS World";

        var firstLetter = string.charAt(0).toUpperCase();
        var restOfString = string.slice(1);

        var modifiedString = firstLetter + restOfString;

        document.write(modifiedString + '</br>');

        document.write('<h1> at ,slice ,length</h1>')
        const colors = ["red", "green", "blue"];

        // Using length property
        const lengthWay = colors[colors.length - 2];
        document.write(lengthWay + '</br>'); 

      
        const sliceWay = colors.slice(-3, -2);
        document.write(sliceWay[0] + '</br>');

       
        const atWay = colors.at(-3);
        document.write(atWay + '</br>') ; 

      document.write('<h1>change km into miles</h1>')
        const kilometers = prompt("Enter value in kilometers: ");

        // conversion factor
        const factor = 0.621371;

        // calculate miles
        const miles = kilometers * factor;

        document.write(`${kilometers} kilometers is equal to ${miles} miles.`);
   




