function Grid(){
	this.rows = 2;
	this.columns = 2;
	this.zoomLevel = 2;		
}

Grid.prototype.createGrid = function(){
return new Grid();
}

Grid.prototype.updateGrid = function(rows, columns){
	this.rows = rows;
	this.columns = columns;
}
