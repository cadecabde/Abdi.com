var errorMessages = "";

function validateEmail() {
  var x = document.getElementById("email").value;
  var atpos = x.indexOf("@");
  var dotpos = x.lastIndexOf(".");
  if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= x.length) {
    errorMessage += "<p>Not a valid e-mail address</p>";
    return false;
  } else
    return true;
}

function validateForm() {
  console.log("beginning form");
  var validFirstname = false;
  var validLastname = false;
  var validEmail = false;
  var validUsername = false;
  var validPassword = false;
  var validAddress = false;
  var validCity = false;
  var validCountry = false;
  var validZipcode = false;

  if (document.getElementById("firstname").value.length > 0 &&
    document.getElementById("firstname").value.length <= 20)
    validFirstname = true;
  else
    errorMessages += "<p> The firstname must be less than or equal to 20 charaters";

  if (document.getElementById("lastname").value.length > 0 &&
    document.getElementById("lastname").value.length <= 50)
    validLastname = true;
  else
    errorMessages += "<p> The lastname must be less than or equal to 50 characters";

  if (validateEmail())
    validEmail = true;

  if (myContact.phone.value == null ||
    myContact.phone.value === "" ||
    myContact.phone.value.length > 15 ||
    !myContact.phone.value.match(numbers))
    errorMessages += "<p>The phone number must be less or qual to 15 characters.  Only numbers are accepted.</p>";
  else
    validPhone = true;

  if (document.getElementById("username").value.length > 0 &&
    document.getElementById("username").value.length <= 12)
    validUsername = true;
  else
    errorMessages += "<p> The Username must be less than or equal to 12 characters";


  if (document.getElementById("password").value.length > 0 &&
    document.getElementById("password").value.length <= 12)
    validPassword = true;
  else
    errorMessages += "<p> The Password must be less than or equal to 7 characters";


  if (myContact.address.value == null ||
    myContact.address.value === "")
    errorMessages += "<p> An Address is required</p>";
  else
    validAddress = true;


  if (myContact.city.value == null ||
    myContact.city.value === "")
    errorMessages += "<p> A City is required</p>";
  else
    validCity = true;


  if (myContact.countries.value == null ||
    myContact.countries.value === "")
    errorMessages += "<p> A Country is required</p>";
  else
    validCountry = true;

  if (myContact.countries.value == 3)
    if (myContact.zipcode.value.length === 5)
      validZipcode = true
    else
      errorMessages += "<p>A Zip Code is required if the chosen country is USA.</p>";


  console.log("errorMessage");
  document.getElementById("errorMessage").innerHTML = errorMessages;
  return validFirstname && validLastname && validEmail && validUsername && validPassword && validAddress && validCity && validZipcode;
}
