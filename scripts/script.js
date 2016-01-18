var navButton = document.getElementById('knapp');
var navMenu = document.getElementById('navbar');

navButton.addEventListener('click', function(event){
	if(this.className=="clicked"){
		this.className="";
		navMenu.className="";
	} else {
		this.className="clicked";
		navMenu.className="clicked";
	}
});



