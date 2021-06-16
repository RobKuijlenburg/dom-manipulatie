const naam = 'Rob';
const colorArray = ['Red', 'Green', 'Purple', 'Blue', 'Yellow'];
const getHi = document.getElementById("hi");

function headerChange() {
    let randomColor = Math.floor(Math.random() * colorArray.length);
    getHi.style.color = colorArray[randomColor];
    getHi.innerHTML = "Hi " + naam;
}