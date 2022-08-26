/*
NEEDS FIXING ->
->doesnt generate password on load
->password length is sometimes lower than what is set (probably caused by some special chars)
*/

window.onload = function(){
    generate();
}

$(".checked").prop('checked', false);

var uppercase = '';
var lowercase = '';
var numbers = '';
var special_char = '';


let alph = 'abcdefghjklmnpqrstvwxyz';
let up_case = alph.toUpperCase();
let nums = '1234567890';
let special = "~`!#$%^&*+=-[]\\\';,/{}|\":<>?";

document.getElementById('uppercase').onclick = function(){
    if(this.checked) uppercase = true;
    else uppercase = false;
}

document.getElementById('lowercase').onclick = function(){
    if(this.checked) lowercase = true;
    else lowercase = false;
}

document.getElementById('numbers').onclick = function(){
    if(this.checked) numbers = true;
    else numbers = false;
}

document.getElementById('special_char').onclick = function(){
    if(this.checked) special_char = true;
    else special_char = false;
}


function lenght(){
    var value = document.getElementById('lenght').value;
    document.getElementById('lenght_label').innerHTML = value;
}

function generate(){
    var arr = [];
    var string = '';

    if(uppercase) string += up_case;
    if(lowercase) string += alph;
    if(numbers) string += nums;
    if(special_char) string += special;

    string.split('');

    arr = shuffleArray(string.split(''));
    
    var passLenght = document.getElementById('lenght').value;
    var generated = [];
    for(let i=0; i < passLenght; i++){
        
        generated.push(arr[i]);
    }
    
    document.getElementById('password_span').innerHTML = '';
    document.getElementById('password_span').innerHTML = generated.join('');
    
}


function shuffleArray(array) {
    let curId = array.length;
    while (0 !== curId) {
      let randId = Math.floor(Math.random() * curId);
      curId -= 1;
      let tmp = array[curId];
      array[curId] = array[randId];
      array[randId] = tmp;
    }
    return array;
}

function toClipBoard(){
    var text = document.querySelector("#password_span").innerHTML;
    navigator.clipboard.writeText(text);
}
