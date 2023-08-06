function addElement() {
    if (document.getElementById("Value").value == "") {
        alert("You must write something");
    } else {
        var result = document.getElementById("Value").value;
        var storeElement = [result];
        document.getElementById("task").innerHTML += storeElement +"<br>";
        document.getElementById("task").style.display="block";

      document.getElementById("Value").value="";
    }

}






