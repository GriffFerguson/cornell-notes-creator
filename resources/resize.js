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