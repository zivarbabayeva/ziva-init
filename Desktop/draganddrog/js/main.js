/*let item=document.querySelector(".item")
let dropArea=document.querySelector(".drop-area");
let id;
item.ondragstart=(ev)=>{
ev.dataTransfer.setData("id",ev.target.id);
}


dropArea.ondragover=(ev)=>ev.preventDefault();

dropArea.ondrop=(ev)=>{
    let id=ev.dataTransfer.getData("id")
    ev.target.append(document.getElementById(id))

};
let items=document.querySelectorAll("item");
item.forEach(item => {
    item.ondragstart=()=>
};
let item = document.querySelector('.item');
let dropArea = document.querySelector('.drop-area');


item.ondragstart = (ev) => {
    ev.dataTransfer.setData("id", ev.target.id)
}*/

//dropAreanin koordinatlari
let rect = dropArea.getBoundingClientRect();
let borderBottom = rect.x + dropArea.clientWidth;
let borderRight = rect.y + dropArea.clientHeight;

//itemin olchuleri
let itemWidth = item.clientWidth;
let itemHeight = item.clientHeight;

dropArea.ondragover = (ev) => {
    ev.preventDefault();    //ondragover eventinin defaultunun qarshisini almaq uchun preventDefault metodu ishledirik
}                         //chunki bu eventin defaultu bize itemi drop elemeye qoymur

dropArea.ondrop = (ev) => {
    //kursorun koordinatlari
    let cursorX = ev.clientX;
    let cursorY = ev.clientY;

   //kursorun koordinatlarin bottom ve right hisselerine geder mesafe itemin height ve widthinen chox olsa return elesin
    if ((borderBottom - cursorX < itemWidth) || (borderRight - cursorY < itemHeight)) {
        return;
    }

   let id = ev.dataTransfer.getData("id");
    ev.target.append(document.getElementById(id));
   item.style.position = 'absolute';  //item bizim dropareanin ustunde olsun
   item.style.left = ev.clientX + 'px'; 
   item.style.top = ev.clientY + 'px';

}