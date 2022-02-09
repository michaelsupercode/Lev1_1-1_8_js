//Lev1_1// string_methods
let firstName = "Simon";
let lastName = "Hoffmann";
let fullName = "SimonHoffmann"
console.log(fullName.length); //13//

//Lev1_2//
const txt = `How inappropriate to call this planet Earth, when clearly it is Ocean.`;
console.log(txt.indexOf("h")); //27//
console.log(txt.search("Earth")); //38//
console.log(txt.search("Moon")); //-1//

//Lev1_3//
var txt2 = `Blue, green, grey, white, or black; smooth, ruffled, or mountainous; that ocean is not silent.`;
console.log(txt2.search(";")); //34//
console.log(txt2.search("green")); //6//
console.log(txt2.search("blue")); //-1//

//Lev1_7//
const text = `Sam is good at codingschool`;
let one = text.replace("good", "bad");
const two = one.replace("codingschool", "school");
document.write(two + "<br>");

let thr = two.replace("Sam", "Susi");
let four = thr.replace("bad", "good");
document.write(four + "<br>");

let five = text.replace("codingschool", "tennis");
document.write(five + "<br>");

//Lev1_8//
//let elev = text.replace("Sam", "sam").replace("to", "at").replace("codingschool", "school");
//let twel = text.replace("Sam", "SAM").replace("codingschool", "SCHOOL");
//let thirt = text.replace("Sam", "sam").replace("is", "IS").replace("going", "GOING").replace("to", "TO").replace("codingschool", "school");
//let fourt = text.replace("is", "Is").replace("going", "Going").replace("to", "To").replace("codingschool", "School");

//document.write(text.toUpperCase() + "<br>");
//document.write(elev + "<br>");
//document.write(twel + "<br>");
//document.write(thirt + "<br>");
//document.write(fourt + "<br>");
//..finde den Fehler nicht..keine Lust mehr!!

//Lev1_1//template_literals
let output = document.getElementById("outer");
let fName = `Michael`;
let fuName = `Hanel`;
let hobby = `kochen`;
let sport = `Badminton`;
let dish = `Chicken Tikka Masala`;
let dish2 = `Dhal`;

output.innerHTML = `Hallo, ich heiße ${fName} ${fuName}, spiele sehr gerne ${sport} und 
liebe es zu ${hobby}, mein Lieblingsessen ist ein sehr scharfes, indisches ${dish} oder auch ein mixed ${dish2}. Vielen Dank!`;