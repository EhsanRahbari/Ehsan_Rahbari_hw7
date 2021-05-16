const form = document.getElementById("form");
form.addEventListener("submit", emptyCheckerAndPassMatcher);

function isAlphanumeric(str) {
  return /^[0-9a-zA-Z]+$/.test(str);
}

//checking and making the changes that we need!
function emptyCheckerAndPassMatcher(event) {
  let userName = document.getElementById("username");
  let pass = document.getElementById("pass");
  let passconf = document.getElementById("passconf");
  if (userName.value == "") {
    let userspan = document.getElementById("userpopup");
    userspan.innerText = "الزامی";
    userspan.style.fontSize = "8px";
    userspan.style.color = "red";
    userName.style.borderColor = "red";
  }
  if (pass.value == "") {
    let passspan = document.getElementById("passpopup");
    passspan.innerText = "الزامی";
    passspan.style.fontSize = "8px";
    passspan.style.color = "red";
    pass.style.borderColor = "red";
  }
  if (passconf.value == "") {
    let passConfSpan = document.getElementById("passconfpopup");
    passConfSpan.innerText = "الزامی";
    passConfSpan.style.fontSize = "8px";
    passConfSpan.style.color = "red";
    passconf.style.borderColor = "red";
  }
  if (pass.value == passconf.value) {
    if (pass.value.length < 8 && isAlphanumeric(pass.value)) {
      let passspan = document.getElementById("passpopup");
      passspan.innerText =
        "رمزعبور باید شامل حداقل ۸ کاراکتر و یک عدد و یک حرف باشد.";
      passspan.style.fontSize = "8px";
      passspan.style.color = "red";
      pass.style.borderColor = "red";
    }
  }else{
    let passConfSpan = document.getElementById("passconfpopup");
    let passspan = document.getElementById("passpopup");
    passConfSpan.innerText = "رمزهای عبور وارد شده یکسان نیستند!";
    passConfSpan.style.fontSize = "8px";
    passConfSpan.style.color = "red";
    passconf.style.borderColor = "red";
    passspan.innerText =
      "رمزهای عبور وارد شده یکسان نیستند!";
    passspan.style.fontSize = "8px";
    passspan.style.color = "red";
    pass.style.borderColor = "red";
  }
}
