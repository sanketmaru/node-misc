var obj = {
	name:"sanket",
	handleMessage: function(message, handler){
		handler(message);
	},
	receive: function(){
		this.handleMessage("Hello," , message => console.log(message + this.name))
	}
}

obj.receive();
