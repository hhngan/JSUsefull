//Auto Like
setInterval(function () {	
	var inputs = document.getElementsByClassName('_6a-y _3l2t  _18vj');
	for(var i=0; i<inputs.length;i++) { 
		var eleInput = inputs[i].className.includes('UFILinkBright');
		if(!eleInput){					
			inputs[i].click(); 
			inputs[i].remove(); 
		}
	}
	setInterval(function(){ window.scrollBy(0, 2000); console.log('start');}, 10000);
}, 60000);

//Add Friends
setInterval(function () {	
	var inputs = document.getElementsByClassName('_42ft _4jy0 FriendRequestAdd addButton _4jy3 _517h _51sy');
	for(var i=0; i<inputs.length;i++) { 
		var eleInput = inputs[i].textContent.includes("Add Friend")
		if(eleInput){					
			inputs[i].click(); 
			inputs[i].remove(); 
		}
	}
	setInterval(function(){ window.scrollBy(0, 2000); console.log('start');}, 10000);
}, 60000);

// Cancel Friend Request
// https://m.facebook.com/friends/center/requests/outgoing/#friends_center_main
setInterval(function () {	
	var inputs = document.getElementsByClassName('_54k8 _52jg _56bs _26vk _2b4n _56bt');
	for(var i=0; i<inputs.length;i++) { 		
		if(inputs[i].value == "Cancel"){					
			inputs[i].click(); 
			inputs[i].remove(); 
		}
	}
	setInterval(function(){ window.scrollBy(0, 2000); console.log('start');}, 10000);
}, 60000);


//Faucet
setInterval(function () {	
	var inputs = document.getElementsByClassName('reply_markup_button');	
	for(var i=0; i<inputs.length;i++) { 		
		if(inputs[i].innerText.includes('Faucet')){
			inputs[i].click();			
		}
	}
	console.clear();
}, 60000);


//Clix4BTC
setInterval(function () {	
	var inputs = document.getElementsByClassName('reply_markup_button');	
	for(var i=0; i<inputs.length;i++) { 		
		if(inputs[i].innerText.includes('View Ads')){
			inputs[i].click();			
		}
	}
	console.clear();
}, 60000);

//BitToClick
setInterval(function () {	
	var inputs = document.getElementsByClassName('reply_markup_button');	
	for(var i=0; i<inputs.length;i++) { 		
		if(inputs[i].innerText.includes('View Ads')){
			inputs[i].click();			
		}
	}
	console.clear();
}, 60000);
