
function myFunction() {
    var person = prompt("What is your name?", "Tony Stark");
    if (person != null) {
        document.getElementById("demo").innerHTML =
        "Hello " + person + "! How are you today?";
    }
}
