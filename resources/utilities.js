//RESIZE
var notes;
var mainIdea;
var summary;

window.onload = function() {
    summary = document.getElementById("summary");
}

function resizeNotes(x) {
	notes = document.getElementById("notes" + x);
    notes.style.height = "1px";
    notes.style.height = notes.scrollHeight + "px";
}

function resizeMainIdea(x) {
	mainIdea = document.getElementById("mainIdea" + x);
    mainIdea.style.height = "1px";
    mainIdea.style.height = mainIdea.scrollHeight + "px";
}

function resizeSummary() {
    summary.style.height = "1px";
    summary.style.height = summary.scrollHeight + "px";
}

//TOGGLE DARK/LIGHT MODE
var root = document.querySelector(':root');

function dark() {
	root.style.setProperty('--text-color-1', '#ffffff')
	root.style.setProperty('--border-color', '#ffffff')
	root.style.setProperty('--background-color', '#000000')
	document.getElementById("dark").remove();
	document.getElementById("modeswitch").innerHTML +=
	'<button onclick="light()" id="light">Switch to light mode</button>'
}

function light() {
	root.style.setProperty('--text-color-1', '#000000')
	root.style.setProperty('--border-color', '#000000')
	root.style.setProperty('--background-color', '#ffffff')
	document.getElementById("light").remove();
	document.getElementById("modeswitch").innerHTML +=
	'<button onclick="dark()" id="dark">Switch to dark mode</button>'
}