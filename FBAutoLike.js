setInterval(function () {	
	var inputs = document.getElementsByClassName('UFILikeLink _4x9- _4x9_ _48-k'); //UFILikeLink _4x9- _4x9_ _48-k UFILinkBright
	for(var i=0; i<inputs.length;i++) { 
		var eleInput = inputs[i].className.includes('UFILinkBright');		
		if(eleInput){		
			console.log('Yes');
			eleInput[i].click(); 
		}
		else 
			console.log('No');
	}	
}, 10000);
