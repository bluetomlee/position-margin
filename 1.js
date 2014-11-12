(function(){
	var a = document.getElementById("test1"),
		b = document.getElementById("test2");
	for (var i = 1000; i >= 0; i--) {
		_div = document.createElement("div");
		_div.className="test";
		_div.innerHTML += "<img src=\"test.gif\">";
		
	};

	a.onclick = function reflowA(){
		a.appendChild(_div);
	var animate = setInterval(function(){
		a.style.left = a.offsetLeft + 30 + 'px';
		if(a.offsetLeft >= 800){
			clearInterval(animate);
		}
	},300);	
}
	b.onclick = function reflowB(){
		b.appendChild(_div);
	var animate = setInterval(function(){
		b.style.marginLeft = b.offsetLeft + 30 + 'px';
		if(b.offsetLeft >= 800){
			clearInterval(animate);
		}
	},300);	
}
}())
