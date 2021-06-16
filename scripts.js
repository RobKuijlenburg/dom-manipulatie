const naam = 'Rob';
const colorArray = ['Red', 'Green', 'Purple', 'Blue', 'Yellow'];
// TODO :: no neeed to get a random number here yet
let randomColor = Math.floor(Math.random() * 5);


function headerChange() {
    // TODO :: no need to define colorArray again
    const colorArray = ['Red', 'Green', 'Purple', 'Blue', 'Yellow'];
    // TODO :: randomColor is a const here
    // TODO :: it's better to use colorArray.length instead of hardcoded 5
    // Because if we a add a color it will be used automatically
    let randomColor = Math.floor(Math.random() * 5);

    // TODO :: use document.getElementById only once, outside the function
    // Because get elements from the DOM is CPU heavy
    document.getElementById("hi").style.color = colorArray[randomColor];
    document.getElementById("hi").innerHTML = "Hi " + naam;
}