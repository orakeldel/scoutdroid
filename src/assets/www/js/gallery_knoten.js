function next(){
  position++;
  if (position>imgs_anz) position--;
  document.getElementById("knotenbild").src="../imgs/knoten/"+filename+position+".png";
}

function back(){
  position--;
  if (position<1) position++;
  document.getElementById("knotenbild").src="../imgs/knoten/"+filename+position+".png";
}

var supportsOrientationChange = "onorientationchange" in window,
  orientationEvent = supportsOrientationChange ? "orientationchange" : "resize";
    
function doOrientationStuff(){
  attr_width = Math.min(400,window.innerWidth - 85);
  document.getElementById("knotenbild").width = attr_width;
  attr_top = Math.min(-1*((document.getElementById("knotenbild").height/2)-50),0);
  document.getElementById("leftarrow").style.top = attr_top+"px";
  document.getElementById("rightarrow").style.top = attr_top+"px";
}

window.addEventListener(orientationEvent, function() {
    doOrientationStuff()
}, false); 
