function validation() {
  var fname = document.getElementById("first").value;
  var lname = document.getElementById("last").value;
  var phone = document.getElementById("Phone").value;
  var email = document.getElementById("Email").value;
  var flag = 0;
  if (fname == "") {
    document.getElementById("first").style.border =
      " 2px solid rgba(250, 30, 30)";
    flag = 1;
    document.getElementById("1").style.visibility = "visible";
  } else {
    document.getElementById("first").style.border = "2px solid rgba(0, 0,0, 0)";
    document.getElementById("1").style.visibility = "hidden";
  }
  if (lname == "") {
    document.getElementById("last").style.border =
      " 2px solid rgba(250, 30, 30)";
    flag = 1;
    document.getElementById("2").style.visibility = "visible";
  } else {
    document.getElementById("last").style.border = "2px solid rgba(0, 0,0, 0)";
    document.getElementById("2").style.visibility = "hidden";
  }
  console.log(phone);
  if (phone == "") {
    document.getElementById("Phone").style.border =
      " 2px solid rgba(250, 30, 30)";
    flag = 1;
    document.getElementById("4").style.visibility = "visible";
    document.getElementById("4").innerHTML = "Required";
  } else if (isNaN(parseInt(phone)) || phone.toString().length != 10) {
    document.getElementById("Phone").style.border =
      "2px solid rgba(250, 30, 30)";
    flag = 1;
    document.getElementById("4").style.visibility = "visible";
    document.getElementById("4").innerHTML = "Invalid phone number";
  } else {
    document.getElementById("Phone").style.border = "2px solid rgba(0, 0,0, 0)";
    document.getElementById("4").style.visibility = "hidden";
  }
  if (email == "") {
    document.getElementById("Email").style.border =
      "2px solid rgba(250, 30, 30,1)";
    flag = 1;
    document.getElementById("3").style.visibility = "visible";
    document.getElementById("3").innerHTML = "Required";
  } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    document.getElementById("Email").style.border =
      "2px solid rgba(250, 30, 30, 1)";
    document.getElementById("3").style.visibility = "visible";
    document.getElementById("3").innerHTML = "Invalid email";
    flag = 1;
  } else {
    document.getElementById("Email").style.border =
      " 2px solid rgba(0, 0, 0, 0)";
    document.getElementById("3").style.visibility = "hidden";
  }
  if (document.getElementById("Message").value == "") {
    document.getElementById("Message").style.border =
      " 2px solid rgba(250, 30, 30)";
    flag = 1;
    document.getElementById("5").style.visibility = "visible";
  } else {
    document.getElementById("Message").style.border =
      "2px solid rgba(0, 0,0, 0)";
    document.getElementById("5").style.visibility = "hidden";
  }
  console.log(flag);
  if (flag == 0) {
    document.getElementById("first").value = "";
    document.getElementById("last").value = "";
    document.getElementById("Phone").value = "";
    document.getElementById("Email").value = "";
    document.getElementById("Message").value = "";
    alert("Your message has been sent");
  }
}

function clearErrorMessage(fieldID, errorID) {
  document.getElementById(fieldID).style.border = "2px solid rgba(0, 0, 0, 0)";
  document.getElementById(errorID).style.visibility = "hidden";
}
