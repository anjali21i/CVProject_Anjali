function signup(){
    var fullname = document.getElementById("fullname").value;
    var mobile = document.getElementById("mobile").value;
    var dob = document.getElementById("dob").value;
    var addr = document.getElementById("addr").value;
    var email = document.getElementById("emails").value;
    var pswrd = document.getElementById("pswrds").value;
    var input = document.getElementsByTagName("input");
    
    localStorage.setItem("name1", fullname);
    localStorage.setItem("mob1", mobile);
    localStorage.setItem("dob1", dob);
    localStorage.setItem("addr1", addr);
    localStorage.setItem("email1", email);
    localStorage.setItem("pswrd1", pswrd);


    
    if( fullname == '' || mobile == '' || dob == '' || addr == '' || email == '' || pswrd == '' ){
        alert("please enter credentials");
    }

    else{
        confirm("User registration sucessfully done!");
    }
    
    input.value = '';   
}


function login(){
    var email = document.getElementById("email").value;
    var pswrd = document.getElementById("pswrd").value;

    var email2 = localStorage.getItem("email1");
    var pswrd2 = localStorage.getItem("pswrd1");
    if(email == '' || pswrd == ''){
        alert("please enter credentials");
    }
    else if(email== email2 && pswrd == pswrd2){
        window.location.href="Home.html";
    }
    else{
        alert(" User does not Exist or email and password are incorrect");
    }
}


$(document).ready(function(){
    const bars= document.querySelectorAll(".progress_b");
    
    bars.forEach(function(bar){
        let percentage = bar.dataset.percent;
        let tooltip = bar.children[0];
        tooltip.innerText = percentage + '%';
        bar.style.width = percentage + '%';
    })
});

function logout(){
    localStorage.removeItem("email1");
    localStorage.removeItem("pswrd1");
    window.location.href="index.html";
}

// function checkLogin(){
//     console.log("hi");
//     var email2 = localStorage.getItem("email1");
//     var pswrd2 = localStorage.getItem("pswrd1");

//     if(email2 && pswrd2){
//         window.location.href="Home.html";
//     }else{
//         window.location.href="index.html";
//     }
// }