var module = function testModule(){
	var name = "";
	return {
		getName: function(){
			return name;	
		}
	}
}
console.log(module.getName());
