const source = document.getElementById('search-box');

function searchShows(){
	var showdivs = document.getElementsByClassName("post");

	var searchterm = document.getElementById("search-box").value.toLowerCase();

	for(i = 0; i < showdivs.length; i++){
	  title = showdivs[i].getElementsByClassName("post-title")[0].textContent.toLowerCase();
	  if(title.includes(searchterm)){
		showdivs[i].style.display = '';
	  }else{
		showdivs[i].style.display = 'none';
	  }
	}
}

function blurOnEnter(keyboardEvent){
	key = keyboardEvent.keyCode;
	if(key === 13 ){
		console.log("Blurred");
		source.blur();
	}
}

source.addEventListener('input', searchShows);
source.addEventListener('keyup', blurOnEnter);
