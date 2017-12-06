var count = "0";
var check = "0";
var list = "";
var imageDisplay = "";
var url = "";
var str = "";

function StartScript() {
list = str.split(",");

for (i=0; i<=9; i++) {
imageDisplay += '<img src="' + url + list[i] + '.JPG" alt=""> ';
}

document.getElementById("image-container").innerHTML = imageDisplay;
document.getElementById("number").innerHTML = "Total images: " + list.length;
document.getElementById("text").innerHTML = "Images 1 to 10";

check = (list.length - 1)/10;
} //end function

function NextImages() {
if (count + 1 <= check) {
count += 1;
imageDisplay = "";
for (i=0; i<=9; i++) {
imageDisplay += '<img src="' + url + list[count*10+i] + '.JPG" alt=""> ';
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
for (i=0; i<=9; i++) {
imageDisplay += '<img src="' + url + list[count*10+i] + '.JPG" alt=""> ';
document.getElementById("image-container").innerHTML = imageDisplay;
DisplayNumbers()
}
} else {
} //end if
} //end function

function DisplayNumbers() {
var l_lim = count*10 + 1;
var u_lim = count*10 + 10;
document.getElementById("text").innerHTML = "Images " + l_lim + " to " + u_lim;
} //end function
