setInterval(printTimeAndColor, 1000);
root.style.border = ' 2px solid black';
root.style.backgroundColor = 'green';
const h1 = document.createElement('h1');
h1.style.textAlign = 'center';

function printTimeAndColor(){
    changeColor();
    printTime();

}
function printTime() {
    const d = new Date();
    const h = d.getHours();
    const m = d.getMinutes();
    const s = d.getSeconds();
    const time = document.createTextNode(`${h<10?'0'+h:h}:${m<10?'0'+m:m}:${s<10?'0'+s:s}`);
    h1.textContent = "";
    h1.appendChild(time);
    if(root.firstElementChild){
        root.insertBefore(h1,root.firstElementChild());
    }else{
        root.appendChild(h1);
    }
}
function changeColor() {
    const r = Math.floor(Math.random() * 259);
    const g = Math.floor(Math.random() * 259);
    const b = Math.floor(Math.random() * 259);

    const color = `rgb(${r}, ${g}, ${b})`;


    root.style.color = color;
}