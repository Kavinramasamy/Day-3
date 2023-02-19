var req=new XMLHttpRequest();
req.open("GET","https://restcountries.com/v2/all");
req.send();
req.onload=function(){
    var output=JSON.parse(req.response);

    for(var a in output){
        console.log(output[a].name,output[a].region,output[a].subregion,output[a].population);    }
} 