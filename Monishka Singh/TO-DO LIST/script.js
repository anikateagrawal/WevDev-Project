var btn=document.getElementById("btn1");
btn.onclick=add;
var arr=[];
window.onload=fetch;
function fetch()
{
    arr=[];
    if(!localStorage.getItem("list")==""){
        arr=localStorage.getItem("list");
        arr=arr.split(",")
    }
    display(arr);
}
function display()
{
    arr.forEach(element => {
    let v=element;
    let item=document.createElement("li");
    document.getElementById("list").appendChild(item);
    let d=document.createElement("div");
    item.appendChild(d);
    d.className="task";
    let input=document.createElement("input");
    input.type="text";
    input.value=v;
    input.className="todo list";
    let i1=document.createElement("div");
    let i2=document.createElement("div");
    i1.className="btn tick";
    i2.className="btn del";
    i1.innerHTML=`<i class="fa-solid fa-check"></i>`;
    i2.innerHTML=`<i class="fa-solid fa-trash-can"></i>`;
    d.appendChild(input);
    d.appendChild(i1);
    d.appendChild(i2);
    i1.onclick=check;
    i2.onclick=del;
    });
}
function add()
{
    let v=document.getElementById("todo").value;
    v=v.trim();
    if(!v==""){
    let item=document.createElement("li");
    document.getElementById("list").appendChild(item);
    let d=document.createElement("div");
    item.appendChild(d);
    d.className="task";
    let input=document.createElement("input");
    input.type="text";
    input.value=v;
    input.className="todo list";
    let i1=document.createElement("div");
    let i2=document.createElement("div");
    i1.className="btn tick";
    i2.className="btn del";
    i1.innerHTML=`<i class="fa-solid fa-check"></i>`;
    i2.innerHTML=`<i class="fa-solid fa-trash-can"></i>`;
    d.appendChild(input);
    d.appendChild(i1);
    d.appendChild(i2);
    i1.onclick=check;
    i2.onclick=del;
    arr.push(v);
    localStorage.setItem("list",arr);
    document.getElementById("todo").value="";
    }else alert("To Do cannot be blank");
}
function check(e){
    var i=e.target;
    var p=i.parentElement;
    p.classList.toggle("check");
}
function del(e){
    var i=e.target;
    var p=i.parentElement;
    var v=p.children[0];
    p.parentElement.remove(v);
    arr.pop(v);
    localStorage.setItem("list",arr);
}



time()
        function time(){
        document.getElementById("time").innerText=new Date().toLocaleTimeString();
        setTimeout(time,1000);
        }
        var h=new Date().getHours();
        if(h>=4&&h<12){
            document.getElementById("clock").innerText="Good Morning";
        }
        else if(h>=12&&h<16){
            document.getElementById("clock").innerText="Good Afternoon";
        }
        else if(h>=16&&h<20){
            document.getElementById("clock").innerText="Good Evening";
        }
        else if(h>=20||h<4){
            document.getElementById("clock").innerText="Good night";
        }
        document.getElementById("date").innerText=new Date().toDateString();
        var n=document.getElementById("name");
        if(localStorage.getItem("name")==null)
        {
           n.value="Enter Name"; 
        }
        else n.value=localStorage.getItem("name");
        function set()
        {
            localStorage.setItem("name",n.value);
        }