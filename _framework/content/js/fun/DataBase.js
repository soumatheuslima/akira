var DataBase = {
	maxIndex: 0,
	Index: [],
	init: function(arg){
		if(DataBase.Index.length > 0) return
		DataBase.maxIndex = (arg) ? arg : 4;
		for(var w = 0; w < DataBase.maxIndex; w++ ) DataBase.Index.push(undefined);
	},
	setValue: function(arg1, arg2){	DataBase.Index[arg1] = arg2; },
	getValue: function(arg){ return DataBase.Index[arg];	}
}