const naam = 'Rob';
const colorArray = ['Red', 'Green', 'Purple', 'Blue', 'Yellow'];
let randomColor = Math.floor(Math.random() * 5);


function headerChange() {
    const colorArray = ['Red', 'Green', 'Purple', 'Blue', 'Yellow'];
    let randomColor = Math.floor(Math.random() * 5);
    document.getElementById("hi").style.color = colorArray[randomColor];
    document.getElementById("hi").innerHTML = "Hi " + naam;
}