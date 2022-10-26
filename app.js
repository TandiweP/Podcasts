console.log("Hello");

console.log("This is the JS file");

function clicked() {
    console.log("clicked");
    document.getElementById('horrorButton').style.backgroundColor = "white";
};

let random = Math.random();
if (random < 0.5) {
    console.log("The number is less than 0.5");
    console.log(random);
}

else if (random >= 0.5) {
    console.log("The number is greater than 0.5");
    console.log(random);
};
