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
}, 10000);
