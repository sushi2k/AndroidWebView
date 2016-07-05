
// check if JavaScript is activated
//popup();

var elem = document.createElement("img");
document.getElementById("div1").appendChild(elem);
// access to external storage
elem.src = "file:///storage/emulated/0/Bsd_daemon.jpg";
// access to asset directory of App
//elem.src = "file:///android_asset/Bsd_daemon.jpg";
//elem.src = "file:///data/data/sg.vp.owasp_mobile.myfirstbrokenapp/Bsd_daemon.jpg";


// this only works if setAllowFileAccessFromFileURLs() is enabled (disabled by default)
var file = "file:///data/data/sg.vp.owasp_mobile.myfirstbrokenapp/shared_prefs/key.xml";
//var file = "file:///storage/emulated/0/test.txt";


var xhr = new XMLHttpRequest();
xhr.overrideMimeType("text/plain; charset=iso-8859-1");
xhr.open("GET", file, true);
xhr.onreadystatechange = function() {
 var data = xhr.responseText;
 alert(data);
}
xhr.send();


function popup() {
alert("Hello World")
}

