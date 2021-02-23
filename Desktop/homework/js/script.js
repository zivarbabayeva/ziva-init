//let text=document.getElementById("text");
//text.addEventListener("focus", function(){
  // console.log("focus olundu")
//})
function myFunction() {
   let x, text;
  
    // Get the value of the input field with id="numb"
    x = document.getElementById("text").value;
  
    // If x is Not a Number or less than one or greater than 10
    if (isNaN(x) || x < 1 || x > 10) {
      text = "Daxil edilen reqem duzgun deyil";
    } else {
      text = "dogru";
    }
    document.getElementById("demo").innerHTML = text;
  }

/*let password = document.forms["test"]["Password"];
var emailReg = /^([w-.]+@([w-]+.)+[w-]{2,4})?$/;
// Conditions
if (name != '' && email != '' && contact != '') {
if (email.match(emailReg)) {
if (document.getElementById("male").checked || document.getElementById("female").checked) {
if (contact.length == 10) {
alert("All type of validation has done on OnSubmit event.");
return true;
} else {
alert("The Contact No. must be at least 10 digit long!");
return false;
}
} else {
alert("You must select gender.....!");
return false;
}
} else {
alert("Invalid Email Address...!!!");
return false;
}
} else {
alert("All fields are required.....!");
return false;
}
})
if (name==null || name==""){  
    alert("Name can't be blank");  
    return false;  
  }else if(password.length<6){  
    alert("Password must be at least 6 characters long.");  
    return false;  
    }  
  } 
  if (password.value == "") { 
    window.alert("Please enter your password"); 
    password.focus(); 
    return false; 
} 
  let form=document.getElementById("register");
form.addEventListener("submit",function(ev){
ev.preventDefault();
console.log("salam");
})
/*text.addEventListener("focus",function(){
    console.log(`blur: ${this.value};`)
})
text.addEventListener("blur",function(){
    console.log(`blur: ${this.value};`)
})
text.addEventListener("change", function(){
console.log(`change: ${this.value};`);
})
text.addEventListener("keyup", function(){
    console.log(`keyup:${this.value}`);
})
let form=document.getElementById("register");
form.addEventListener("submit",function(ev){
ev.preventDefault();
console.log("salam");
})