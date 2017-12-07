var count = "0";
var check = "0";
var list = "";
var imageDisplay = "";
var url = "";
var str = "";
var N = 12; //Number of screenshots to view at a time

function StartScript() {
  list = str.split(",");

  for (i=0; i<=N-1; i++) {
    imageDisplay += '<img src="' + url + list[i] + '.JPG" alt=""> ';
  }

  document.getElementById("image-container").innerHTML = imageDisplay;
  document.getElementById("number").innerHTML = "Total images: " + list.length;
  document.getElementById("text").innerHTML = "Images 1 to " + N;
  
  document.getElementById("button-1").innerHTML = "Prev " + N;
  document.getElementById("button-1").onclick = PrevImages;
  document.getElementById("button-3").innerHTML = "Prev " + N;
  document.getElementById("button-3").onclick = PrevImages;
  
  document.getElementById("button-2").innerHTML = "Next " + N;
  document.getElementById("button-2").onclick = NextImages;
  document.getElementById("button-4").innerHTML = "Next " + N;
  document.getElementById("button-4").onclick = NextImages;

  check = (list.length - 1)/N;
} //end function

function NextImages() {
if (count + 1 <= check) {
count += 1;
imageDisplay = "";
for (i=0; i<=N-1; i++) {
imageDisplay += '<img src="' + url + list[count*N+i] + '.JPG" alt=""> ';
document.getElementById("image-container").innerHTML = imageDisplay;
DisplayNumbers()
}
} else {
} //end if
} //end function

function PrevImages() {
if (count - 1 >= 0) {
count -= 1;
imageDisplay = "";
for (i=0; i<=N-1; i++) {
imageDisplay += '<img src="' + url + list[count*N+i] + '.JPG" alt=""> ';
document.getElementById("image-container").innerHTML = imageDisplay;
DisplayNumbers()
}
} else {
} //end if
} //end function

function DisplayNumbers() {
var l_lim = count*N + 1;
var u_lim = count*N + N;
document.getElementById("text").innerHTML = "Images " + l_lim + " to " + u_lim;
} //end function
