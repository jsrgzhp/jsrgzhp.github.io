function showPic(whichPic){
	var source=whichPic.getAttribute("href");
	var text=whichPic.getAttribute("title");
	var placeholder=document.getElementById("placeholder");
	placeholder.setAttribute("src",source);
	var descriptionHolder=document.getElementById("description");
	descriptionHolder.firstChild.nodeValue=text;
}