//a
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();

request.onload=function(){
    var result=JSON.parse(request.response);
    var asiaCountries = result.filter((country) => {
        return country.region === "Asia";
     })
     console.log(asiaCountries);
}

//b
var request1 = new XMLHttpRequest();
request1.open("GET","https://restcountries.com/v3.1/all");
request1.send();
request1.onload = function () {
    var result1 = JSON.parse(request1.response);
    const totalpopulation = result1.filter((element) => {
        return element.population < 200000;
    });
    console.log(totalpopulation);
};

//c
var request2 = new XMLHttpRequest();
request2.open("GET","https://restcountries.com/v3.1/all");
request2.send();
request2.onload=function(){
    var result2=JSON.parse(request2.response);
   result2.forEach(element => {
    console.log(element.name);
        console.log(element.capital);
        console.log(element.flag); 

   });
}

//d

var request3 = new XMLHttpRequest();
request3.open("GET","https://restcountries.com/v3.1/all");
request3.send();
request3.onload=function(){
    var results3=JSON.parse(request3.response);
    var total = results3.reduce((a,b) =>{
        return a+b.population;
    } ,0);

    console.log(total);
 
}

//e


var request4 = new XMLHttpRequest();
request4.open("GET","https://restcountries.com/v3.1/all");
request4.send();
request4.onload=function(){
    var results4=JSON.parse(request4.response);
    var currency = results4.filter((element) => {
     for(let key in element.currencies){
        if(element.currencies[key].code === "USD"){
            return element;
        }
     }
   })
    console.log(currency);
}
