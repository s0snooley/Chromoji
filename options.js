function loadOptions() {
	var ioscompat = document.getElementById("fieldioscompat");
	var value = localStorage["ioscompat"];
	ioscompat.checked = (value == "true");
	
	var blacklist = document.getElementById("fieldblacklist");
	var value2 = localStorage["blacklist"];
	blacklist.value = value2;
	
	var emojisize = document.getElementById("fieldemojisize");
	var value3 = localStorage["emojisize"];
	emojisize.value = value3;
}

function saveOptions() {
	var ioscompat = document.getElementById("fieldioscompat");
	var value = ioscompat.checked;
	localStorage["ioscompat"] = value;
	
	var blacklist = document.getElementById("fieldblacklist");
	var value2 = blacklist.value;
	localStorage["blacklist"] = value2;
	
	var emojisize = document.getElementById("fieldemojisize");
	var value3 = emojisize.value;
	localStorage["emojisize"] = value3;
	
	window.close();
}

function cancelOptions() {
	window.close();
}

function init() {
	var save = document.getElementById("buttonsave");
	save.addEventListener("click", saveOptions);

	var cancel = document.getElementById("buttoncancel");
	cancel.addEventListener("click", cancelOptions);

	loadOptions();
}

document.body.addEventListener("load", init());
