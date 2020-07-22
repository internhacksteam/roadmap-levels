function hideInside() {
  var x = document.getElementById("inside");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function showWelcome() {
	var welcome = document.getElementById("welcome");
 	if (welcome.style.display === "block") {
    	welcome.style.display = "block";
  } else {
    welcome.style.display = "block";
    hello.style.display = "block";
  }
}

function showAda() {
	var ada = document.getElementById("ada");
 	if (ada.style.display === "block") {
    	ada.style.display = "block";
  } else {
    ada.style.display = "block";
    startLearn.style.display = "block";
  }
}

function startLearning() {
	document.getElementById("hideWelcome").style.display='none';
	document.getElementById("printing").style.display='block';
	document.getElementById("next").style.display='block';
}

function level2() {
	document.getElementById("hideLevel1").style.display='none';
	document.getElementById("level2").style.display='block';
	document.getElementById("btn2").style.display='none';
}

function hideLevel2() {
  var x = document.getElementById("level2");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}