var count = 0;
var check = 0;
var imageDisplay = "";
var N = 12; //Number of screenshots to view at a time
var url = ""; //Declare url in html page
var X = 0; //Number of images in list, declare in html page
var prefix = ""; //Prefix of image names, declare in html page

function StartScript() {
  url = url + prefix + " (";

  for (i=1; i<=Math.min(N, X); i++) {
    imageDisplay += '<img src="' + url + i + ').JPG" alt=""> ';
  }

  document.getElementById("image-container").innerHTML = imageDisplay;
  document.getElementById("number").innerHTML = "Total images: " + X;
  DisplayNumbers();
  
  document.getElementById("button-1").innerHTML = "Prev " + N;
  document.getElementById("button-1").onclick = PrevImages;
  document.getElementById("button-3").innerHTML = "Prev " + N;
  document.getElementById("button-3").onclick = PrevImages;
  
  document.getElementById("button-2").innerHTML = "Next " + N;
  document.getElementById("button-2").onclick = NextImages;
  document.getElementById("button-4").innerHTML = "Next " + N;
  document.getElementById("button-4").onclick = NextImages;

  check = (X - 1)/N;
  
  //debugging
  document.getElementById("debug2").innerHTML = "Check: " + check;
} //end function

function NextImages() {
if (count + 1 <= check) {
count += 1;
imageDisplay = "";
var m = 0;
for (i=1; i<=N && count*N+i <= X; i++) {
  m = count*N+i;
  imageDisplay += '<img src="' + url + m + ').JPG" alt=""> ';
  } //end for
  document.getElementById("image-container").innerHTML = imageDisplay;
  DisplayNumbers();
} //end if
} //end function

function PrevImages() {
if (count - 1 >= 0) {
count -= 1;
imageDisplay = "";
var m = 0;
for (i=1; i<=N; i++) {
m = count*N+i;
imageDisplay += '<img src="' + url + m + ').JPG" alt=""> ';
  } //end for
document.getElementById("image-container").innerHTML = imageDisplay;
DisplayNumbers();
} //end if
} //end function

function DisplayNumbers() {
var l_lim = count*N + 1;
var u_lim = Math.min(count*N + N, X);
document.getElementById("text").innerHTML = "Images " + l_lim + " to " + u_lim;
  //debugging
  document.getElementById("debug1").innerHTML = "Count: " + count;
} //end function
