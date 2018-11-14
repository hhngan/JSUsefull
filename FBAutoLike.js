setInterval(function () {	
	var inputs = document.getElementsByClassName('UFILikeLink _4x9- _4x9_ _48-k');
	for(var i=0; i<inputs.length;i++) { 
		var eleInput = inputs[i].className.includes('UFILinkBright');
		if(!eleInput){		
			console.log('LikeClick');
			inputs[i].click(); 
		}
		else 
			console.log('No');
	}
	start_scroll_down()
}, 10000);


function start_scroll_down() { 
   scroll = setInterval(function(){ window.scrollBy(0, 2000); console.log('start');}, 10000);
}
