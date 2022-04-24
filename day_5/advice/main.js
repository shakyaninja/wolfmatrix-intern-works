const fetchAdvice = () => {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("Advice").innerHTML = '"' + JSON.parse(this.responseText).slip.advice + '"';
            // console.log(JSON.parse(this.responseText).slip.advice);
        }
    };
    xmlhttp.open("GET", "https://api.adviceslip.com/advice", true);
    xmlhttp.send();
}

var bg_colors = ['F72585','B5179E','7209B7','560BAD', '480CA8', '3A0CA3','3F37C9','4361EE','4895EF','4CC9F0'];
var f_colors = ['#000000','#ffffff'];

// choose random colors 
var bg_color = bg_colors[Math.floor(Math.random() * 5)];
var f_color = '#ffffff';

// if(bg_color in []){

// }
document.querySelector('body').style.backgroundColor = '#'+bg_color;
document.querySelector('body').style.color = f_color;

fetchAdvice();