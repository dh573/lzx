onload = function(){
	var p = document.getElementsByTagName("p");
			p[1].onmouseenter = function(){
				//alert("aa")
				this.innerHTML = "不好"
			}
			p[1].onmouseleave = function(){
				this.innerHTML = "你好"
			}
}
	

























