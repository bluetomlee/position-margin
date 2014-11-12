(function(){
	var a = document.getElementById("test1"),
		b = document.getElementById("test2");
	for (var i = 1000; i >= 0; i--) {
		_div = document.createElement("div");
		_div.className="test";
		_div.innerHTML += "<img src=\"test.gif\">";
		a.appendChild(_div);
	};

	a.onclick = function reflowA(){
	var animate = setInterval(function(){
		a.style.left = a.offsetLeft + 30 + 'px';
		if(a.offsetLeft >= 800){
			clearInterval(animate);
		}
	},100);	
}
	b.onclick = function reflowB(){
	var animate = setInterval(function(){
		b.style.left = b.offsetLeft + 30 + 'px';
		if(b.offsetLeft >= 800){
			clearInterval(animate);
		}
	},100);	
}
}())
