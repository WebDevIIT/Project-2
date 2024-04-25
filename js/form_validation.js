function validateForm() {
  var email = document.forms["signupForm"]["email"].value;
  var emailRegex = /\S+@\S+\.\S+/;
  
  if (email == "") {
    alert("Email address must be filled out");
    return false;
  } else if (!emailRegex.test(email)) {
    alert("Please enter a valid email address");
    return false;
  } else {
    alert("Your email, " + email + " has been subscribed to our newsletter!");
    return true;
  }
  }