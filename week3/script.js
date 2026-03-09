function externalMessage(){
    alert("Message from external javascript");
}
function submitt(){
    username = document.getElementById("username").value;
    password = document.getElementById("password").value;
    let message = "";
    if(username!=="" && password!==""){
        message = message + "Login Success";
    }
    else{
        if(username===""){
            message = message + "Username missing\n";
        }
        if(password===""){
            message = message + "Password missing";
        }
    }
    alert(message);
}
