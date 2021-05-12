//TOGGLE DARK/LIGHT MODE
var root = document.querySelector(':root');
var rootVars = getComputedStyle(root);

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

//FONT SIZE
function fontIncrease() {
    var fontSize1 = rootVars.getPropertyValue('--font-size-1');
    var fontSize2 = rootVars.getPropertyValue('--font-size-2');
    var fs1Assign = Number(fontSize1);
    var fs2Assign = Number(fontSize2);
    if (fs2Assign < 3.2) {
        fs1Assign = fs1Assign += 0.05;
        fs2Assign = fs2Assign += 0.05;
        // console.log('1: fs1:' + fs1Assign + '  |  fs2: ' + fs2Assign);
        fs1Assign = Math.round(fs1Assign * 100) / 100;
        fs2Assign = Math.round(fs2Assign * 100) / 100;
        // console.log('2: fs1:' + fs1Assign + '  |  fs2: ' + fs2Assign);
        root.style.setProperty('--font-size-1', fs1Assign);
        root.style.setProperty('--font-size-2', fs2Assign);
    }
    document.getElementById("fontSize").innerHTML = fs1Assign;
}

function fontDecrease() {
    var fontSize1 = rootVars.getPropertyValue('--font-size-1');
    var fontSize2 = rootVars.getPropertyValue('--font-size-2');
    var fs1Assign = Number(fontSize1);
    var fs2Assign = Number(fontSize2);
    if (fs1Assign > 0.6) {
        fs1Assign = fs1Assign -= 0.05;
        fs2Assign = fs2Assign -= 0.05;
        // console.log('1: fs1:' + fs1Assign + '  |  fs2: ' + fs2Assign);
        fs1Assign = Math.round(fs1Assign * 100) / 100;
        fs2Assign = Math.round(fs2Assign * 100) / 100;
        // console.log('2: fs1:' + fs1Assign + '  |  fs2: ' + fs2Assign);
        root.style.setProperty('--font-size-1', fs1Assign);
        root.style.setProperty('--font-size-2', fs2Assign);
    }
    document.getElementById("fontSize").innerHTML = fs1Assign;
}

//ADD SECTION
function addSection() {

}

function removeSection() {
    
}