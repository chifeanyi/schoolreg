alert("Hello! Welcome to the official page of Ifeanyi Chukwujeme University");

function validateForm() {
  var x = document.forms["myForm"]["password1"].value;
  var y = document.forms["myForm"]["password2"].value;
  if (x==y) {
    alert ("Student account Successfully Created");
    return true;
  }

  else alert("passwords does not match");
    return false;
}

// if (x!=y) {
//   alert ("passwords does not match");
// }
// else alert ("Student account Successfully created")

function success()
{ alert ("Student account Successfully Created" )}
