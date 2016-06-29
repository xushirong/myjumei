var bar=document.getElementById("slide");
var login=document.getElementById("login");
var shop=document.getElementById("shop");
var money=document.getElementById("money");
var heart=document.getElementById("heart");
var sBox=document.getElementById("sBox");
var oClose=document.getElementById("close");
var myBox=document.getElementById("myBox");
var myClose=document.getElementById("myclose");
var bill=document.getElementById("bill");
var shopBox=document.getElementById("shopBox");
var goClose=document.getElementById("goclose");

var oBtn=document.getElementById('btn');
sBox.flag = true;


oClose.onclick = function () {
    sBox.style.display="none";
};
login.onclick = function () {
    if (sBox.flag) {
        sBox.style.display="none";
        sBox.flag = false;
        return;
    }
    sBox.style.display="block";
    sBox.flag = true;

};


myClose.onclick = function () {
    myBox.style.display="none";
    myBox.flag=false;
};
money.onclick = function () {
    if (myBox.flag) {
        myBox.style.display="none";
        myBox.flag = false;
    }
    else{
        myBox.style.display="block";
        myBox.style.top="345px";
        myBox.flag = true;
    }
};

myClose.onclick = function () {
    myBox.style.display="none";
    myBox.flag=false;
};
heart.onclick = function () {
    if (myBox.flag) {
        myBox.style.display="none";
        myBox.flag = false;
    }
    else{
        myBox.style.display="block";
        myBox.style.top="390px";
        myBox.flag = true;
    }
};
heart.onmouseover = function () {
        myBox.style.display="none";
        myBox.flag = false;
};

goClose.onclick = function () {
    shopBox.style.display="none";
    shopBox.flag=false;
};
shop.onclick = function () {
    if (shopBox.flag) {
        shopBox.style.display="none";
        shopBox.flag = false;
    }
    else{
        shopBox.style.display="block";
        shopBox.flag = true;
    }
};

//回到顶部

window.onscroll=computedDisplay;
function computedDisplay(){
    if(utils.win('scrollTop')>=utils.win('clientHeight')){
        oBtn.style.display='block';
    }else{
        oBtn.style.display='none';
    }
}
oBtn.onclick=function(){
    this.style.display='none';
    window.onscroll=null;
    var duration=500;
    var interval=10;
    var target=utils.win('scrollTop');
    var step=(target/duration)*interval;
    var timer=setInterval(function(){
        var curT=utils.win('scrollTop');
        if(curT<=0){
            clearInterval(timer);
            window.onscroll=computedDisplay;
            return;
        }
        curT-=step;
        utils.win('scrollTop',curT);
    },interval)
}
//图片延迟加载
window.onscroll=function(){
    var aImg=document.getElementsByTagName('img');
    var winBottom=utils.win('scrollTop')+utils.win('clientHeight');
    for(var i=0;i<aImg.length; i++){
        var cur=aImg[i];
        lazyLoad(cur,winBottom)
    }
};
function lazyLoad(img,winB){
    if(img.loaded){
        return;
    }
    var curT=utils.offset(img).top+img.offsetHeight;
    if(curT<=winB){
        var realImg=img.getAttribute('realImg');
        var newImg=new Image;
        newImg.src=realImg;
        newImg.onload=function(){
            img.setAttribute('src',realImg);
            img.loaded=true;
        }
        newImg.onerror=function(){
            console.log('图片加载失败');
            img.loaded=true;
        }
    }
}
