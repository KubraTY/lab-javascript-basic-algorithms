// Iteration 1: Names and Input

var hacker1 = "Kubra";
var hacker2 = "Ethem";

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length}  characters.`)
} else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names ${hacker1.length} characters!`)
}

// Iteration 3: Loops

let result = "";

for (let i = 0; i < hacker1.length; i++) {

    result = result + hacker1[i].toUpperCase() + " "
    console.log(result.trim())
};

//

let reversedNavigatorName = "";

for (let i = hacker2.length - 1; i >= 0; i--) {
  reversedNavigatorName = reversedNavigatorName + hacker2[i];
}
console.log(`The navigator's name in reverse order is: ${reversedNavigatorName}`);

//

let isSame = true;

for(let i=0; i<Math.min(hacker1.length, hacker2.length); i++){
  
  if(hacker1[i] < hacker2[i]){
    console.log(`The driver's name goes first.`);
    isName = false
    break;
  
  }else if(hacker1[i] > hacker2[i]){
    console.log("Yo, the navigator goes first, definitely.");
    isSame = false;
    break;
  }
}

if(isSame){
  if(hacker1.length > hacker2.length){
       console.log("Yo, the navigator goes first, definitely.");
  }else if(hacker2.length > hacker1.length){
    console.log(`The driver's name goes first.`);
  }else {
    console.log("What?! You both have the same name?")
  }
}

// Bonus 1

var longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel nibh neque. Pellentesque sit amet lectus felis. Suspendisse fringilla dapibus suscipit. Phasellus tempor elementum metus, non consectetur odio facilisis accumsan. Suspendisse sapien mauris, vestibulum et vehicula et, condimentum id tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus maximus lacus et nulla scelerisque faucibus. Sed sed tristique orci.Nunc faucibus id enim ac facilisis. Nam lacus libero, viverra vestibulum dui vitae, convallis tincidunt ipsum. Pellentesque mollis finibus aliquet. Maecenas nisl est, convallis in arcu sed, porta pharetra lectus. Donec quis sem eget leo faucibus accumsan ut eget mi. Phasellus pharetra leo magna, lacinia gravida ligula tempor a. Fusce eget libero ac mauris scelerisque volutpat. Suspendisse massa odio, congue ut mattis sed, tempus in ex. Sed nec elit risus. Nulla congue lorem eu lacus porttitor, sit amet pharetra turpis iaculis.Cras molestie augue vel ipsum tristique porta. Suspendisse auctor arcu ligula, ut hendrerit lorem tempus et. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam velit nisi, porttitor non ex sed, consequat malesuada risus. Donec volutpat sem est, eget commodo eros consequat ut. Donec id arcu vitae dui imperdiet auctor. Fusce fermentum viverra mauris nec mattis."

let count = 0;

for (let i = 0; i < longText.length; i++) {
    count = count + 1;

}
console.log(count);

let twoChars = "";
let count2 = 0;

for (let i = 0; i < longText.length; i++) {
    twoChars = longText[i] + longText[i + 1];

    if (twoChars === "et") {
        count2 = count2 + 1;
    }

}

console.log(count2);