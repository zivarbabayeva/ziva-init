let upload=document.getElementById("upload");
let table=document.getElementById("table");
let removeAll=document.getElementById("removeAll");

upload.onclick=function () {
this.nextElementSibling.click();
}
upload.nextElementSibling.onchange=function(ev){
    for (const file of ev.target.files) {
        console.log(file)
let reader=new FileReader();
reader.onloadend=function(ev){
  
table.lastElementChild.innerHTML+=`<tr><td><img src="${ev.target.result}" alt="" height="200"></td><td>${file.name}</td><td>${file.type}</td><td>${file.size}</td></tr>`
}
reader.readAsDataURL(file)
table.classList.remove("d-none")
}
}
remove onclick=function(){
    table.lastElementChild.innerHTML="";
}