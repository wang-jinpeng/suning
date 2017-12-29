{
    let box1=document.querySelectorAll(".photo li");
    let box2=document.querySelectorAll(".banner-diandian li");
    let box=document.querySelector(".banner-photo");
    let left=document.querySelector(".bannerleft");
    console.log(left)
    let right=document.querySelector(".bannerright");
    box2.forEach(function (ele,index) {
        ele.onmouseover=function () {
            for(let i=0;i<box2.length;i++){
                box2[i].classList.remove("one");
                box1[i].classList.remove("one")
            }
            this.classList.add("one");
            box1[index].classList.add("one");
        }
    });
    let n=0;
    function bannerfn(dir="r") {
        if(dir==="r"){
            n++;
        }else if (dir==="l"){
            n--;
        }
        if(n===box1.length){
            n=0;
        }
        if(n===-1){
            n=box1.length-1;
        }
        for(let i=0;i<box2.length;i++){
            box2[i].classList.remove("one");
            box1[i].classList.remove("one");
        }
        box2[n].classList.add("one");
        box1[n].classList.add("one");
    }
    let st=setInterval(bannerfn,5000);
    box.onmouseover=function () {
        clearInterval(st);
    };
    box.onmouseout=function () {
        st=setInterval(bannerfn,5000)
    };
    let flag=true;
    right.onclick=function () {
        if(flag){
            flag=false;
            bannerfn();
        }
    };
    left.onclick=function () {
        if(flag) {
            flag=false;
            bannerfn("l");
        }
    };
    box1.forEach(function (ele,index) {
        ele.addEventListener("transitionend",
            function(){
                flag=true;
            })
    })
}