     console.time("Test");
     
     
    setImmediate(function(){
	    console.log("In setTimeOut");
     },10000);

     setImmediate(function(){
            console.log("In setTimeOut 500");
     },500);


     for(var i=0; i <2500000; i +=1 ){
           if(i%100000 == 0){
           	console.log(i);
	   } 
     }
     console.timeEnd("Test");
