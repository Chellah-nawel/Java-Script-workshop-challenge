function check(){
    let fname = document.getElementById("fname").value;
    let fnameInput = document.getElementById("fname");
    let lname = document.getElementById("lname").value;
    let lnameInput = document.getElementById("lname");
    let email = document.getElementById("email").value;
    let emailInput = document.getElementById("email");
    let pass = document.getElementById("pass").value;
    let passInput = document.getElementById("pass");
    let fnp = document.getElementById("fnp");
    let lnp = document.getElementById("lnp");
    let emailp = document.getElementById("emailp");
    let passp = document.getElementById("passp");
    let errorpic1 = document.getElementById("error1");
    let errorpic2 = document.getElementById("error2");
    let errorpic3 = document.getElementById("error3");
    let errorpic4 = document.getElementById("error4");

    if(fname ===""){
        fnp.style.display="block";
        fnp.style.color="red";
        fnp.innerText="First Name cannot be empty";
        fnp.style.fontSize="12px";
        fnp.style.marginLeft="160px";
        fnp.style.marginTop="-5px";
        fnp.style.marginBottom="2px";
        errorpic1.style.display="block";
        errorpic1.style.marginLeft="330px";
        errorpic1.style.marginTop="-18px";
        errorpic1.style.marginBottom="2px";
        fnameInput.style.border="2px solid red";
        fnameInput.setAttribute("placeholder","");
    } else{
        fnp.style.display="none";
        errorpic1.style.display="none";
        fnameInput.style.border="1px solid hsl(246, 25%, 77%)";
    }

    if(lname ===""){
        lnp.style.display="block";
        lnp.style.color="red";
        lnp.innerText="Last Name cannot be empty";
        lnp.style.fontSize="12px";
        lnp.style.marginLeft="160px";
        lnp.style.marginTop="-5px";
        lnp.style.marginBottom="0px";
        errorpic2.style.display="block";
        errorpic2.style.marginLeft="330px";
        errorpic2.style.marginTop="-15px";
        errorpic2.style.marginBottom="0px";
        lnameInput.style.border="2px solid red";
        lnameInput.setAttribute("placeholder","");
    }else{
        lnp.style.display="none";
        errorpic2.style.display="none";
        lnameInput.style.border="1px solid hsl(246, 25%, 77%)";
    }

    if(email ===""){
        emailp.style.display="block";
        emailp.style.color="red";
        emailp.innerText="Looks like this is not an email";
        emailp.style.fontSize="12px";
        emailp.style.marginLeft="160px";
        emailp.style.marginTop="-5px";
        emailp.style.marginBottom="0px";
        errorpic3.style.display="block";
        errorpic3.style.marginLeft="330px";
        errorpic3.style.marginTop="-15px";
        errorpic3.style.marginBottom="0px";
        emailInput.style.border="2px solid red";
        emailInput.setAttribute("placeholder","email@example/com");
        emailInput.classList.add("error");
    }else{
        emailp.style.display="none";
        errorpic3.style.display="none";
        emailInput.style.border="1px solid hsl(246, 25%, 77%)";
    }

    if(pass ===""){
        passp.style.display="block";
        passp.style.color="red";
        passp.innerText="Password cannot be empty";
        passp.style.fontSize="12px";
        passp.style.marginLeft="160px";
        passp.style.marginTop="-5px";
        passp.style.marginBottom="0px";
        errorpic4.style.display="block";
        errorpic4.style.marginLeft="330px";
        errorpic4.style.marginTop="-15px";
        errorpic4.style.marginBottom="0px";
        passInput.style.border="2px solid red";
        passInput.setAttribute("placeholder","");
    }else{
        passp.style.display="none";
        errorpic4.style.display="none";
        passInput.style.border="1px solid hsl(246, 25%, 77%)";
    }

    return false;
}
document.getElementById("submitbtn").addEventListener("click",check);