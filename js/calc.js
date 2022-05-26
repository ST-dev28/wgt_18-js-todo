/*let btn = document.getElementById('btn-blue');
let btnGetValue = document.getElementById('user-text');

btnGetValue.addEventListener('click', function () {
    //let textCool = document.getElementById('text-input').value;
    //console.log(textCool);
    let str = document.getElementById('text-input').value;
    let strValue = str.length;
    //alert(strValue);
    console.log(strValue);
    document.getElementById('text-value').innerText = strValue;
});

//let result = document.getElementById("text-value").innerHTML = strValue;

btn.addEventListener('click', function () {
    let elem = document.getElementById('para');
    elem.style.color = 'blue';
});

function changeColor(newColor) {
    let elem = document.getElementById('para');
    elem.style.color = newColor;
};
*/

let button = document.getElementById('btn');

function checkLen() {
    let word = document.getElementById('str').value;
    let count = word.length;
    let outputDiv = document.getElementById('output');

    outputDiv.innerHTML = `<h1>${count}</h1>`
}
