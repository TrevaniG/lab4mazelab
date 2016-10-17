window.onload=function(){

	document.getElementById("boundary1").onmouseover= onBoundary;
};

function onBoundary(){
     document.getElementById("boundary1").style.backgroundColor = "#ff8888";
     document.getElementById("boundary1").addClassName("youlose");
}
        