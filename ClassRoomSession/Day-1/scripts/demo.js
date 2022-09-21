var a = 'hello';
var a = 20;
function callme() {
    console.log(a);
    document.write("Welcome to Js");
    alert("Welcome to Js");
}
function showData() {
    document.getElementById('show').innerHTML = 'welcome to JS';
}

function shownReplace()
{
    let newdata = document.data.uname.value
    document.getElementById('show').innerHTML = newdata
    alert(newdata)
    console.log(newdata)
}
