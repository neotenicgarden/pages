var count = "0";
var check = "0";

function StartScript() {
var str = "HNI_0001,\
HNI_0002,\
HNI_0003,\
HNI_0004,\
HNI_0005,\
HNI_0006,\
HNI_0007,\
HNI_0008,\
HNI_0009,\
HNI_0010,\
HNI_0011,\
HNI_0012,\
HNI_0013,\
HNI_0014,\
HNI_0015,\
HNI_0016,\
HNI_0017,\
HNI_0018,\
HNI_0019,\
HNI_0020,\
HNI_0021,\
HNI_0022,\
HNI_0023,\
HNI_0024,\
HNI_0025,\
HNI_0026,\
HNI_0027,\
HNI_0028,\
HNI_0029,\
HNI_0030,\
HNI_0031,\
HNI_0032,\
HNI_0033,\
HNI_0034,\
HNI_0035,\
HNI_0036,\
HNI_0037,\
HNI_0038,\
HNI_0039,\
HNI_0040,\
HNI_0041,\
HNI_0042,\
HNI_0043,\
HNI_0044,\
HNI_0045,\
HNI_0046,\
HNI_0047,\
HNI_0048,\
HNI_0049,\
HNI_0050,\
HNI_0051,\
HNI_0052,\
HNI_0053,\
HNI_0054,\
HNI_0055,\
HNI_0056,\
HNI_0057,\
HNI_0058,\
HNI_0059";

var list = str.split(",");

var imageDisplay = "";
var url = "http://ppdnotsonic.free.fr/stuff/Miitopia/00/";

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
