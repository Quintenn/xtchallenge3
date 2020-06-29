//(Lees graag helemaal onderaan voor een onderbouwing/verantwoording)
//VARIABLES FOR CALLING API'S
//var cityName = 'Madrid';
//var covidCall = 1;
//var weatherCall = "http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=metric&appid=f1f72acbd4642e54bfd47e688bcb8f51";

//COVIDAPI
$.getJSON("https://api.covid19api.com/summary", function (data) {
    console.log(data);
    var cases = data.Global.TotalConfirmed,
        advice = document.getElementById('advice').innerHTML;
    console.log(cases);
    $('.cases').append(cases);
    if (cases>=20000){
        document.getElementById('advice').innerHTML="Because of the numerous cases of COVID-19 in this country, it is not recommended as a landing spot.";
    }else{
        document.getElementById('advice').innerHTML="This country is deemed relatively safe from COVID-19, therefore it will be a suitable landing spot.";
    }
//      THIS IS ALL FOR ADVICES (read below)
//    if (cases >= 100000){
//        value1 = 1;
//    }else if (cases <=99999){
//        value1 = 2;  
//    }else if (cases <=50000){
//        value1 = 3;  
//    }else if (cases <=10000){
//        value1 = 4;  
//    }else if (cases <=5000){
//        value1 = 5;  
//    }    
//    console.log(value1);  
});

//WEATHERAPI
$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=Madrid&units=metric&appid=f1f72acbd4642e54bfd47e688bcb8f51", function (data) {
    console.log(data);
    var icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png",
        weather = data.weather[0].main,
        temp = Math.floor(data.main.temp),
        advice = document.getElementById('advice').innerHTML,
        location = data.name,
        value2;
    
    $('.icon').attr('src', icon);
    $('.weather').append('The weather is' + ' ' + weather);
    $('.temp').append('Right now, it is ' + temp + ' ' + 'degrees Celsius.');
    $('.location').append(location); 
//      THIS IS ALL FOR THE ADVICE (read below)
//    if (temp <= 0){
//        value2 = 1;
//    }else if (temp <= 9){
//        value2 = 2;
//    }else if (temp <=19){
//        value2 = 3;
//    }else if (temp <= 29){
//        value2 = 4;
//    }else if (temp <= 40){
//        value2 = 5;
//    }
//    var value3 = (value1 + value2) / 2;
   
//    if (value3 <= 1.49){
//        document.getElementById('advice').innerHTML="Dit is echt een kut plek.";
//    }else if (value3 <= 2.49 ){
//        document.getElementById('advice').innerHTML="Dit is een kut plek";
//    }else if (value3 <= 3.49 ){
//        document.getElementById('advice').innerHTML="Je kan hier best landen";
//    }else if (value3 <= 4.49 ){
//        document.getElementById('advice').innerHTML="Dit is een goeie plek";
//    }else if (value3 <= 5 ){
//        document.getElementById('advice').innerHTML="Dit is echt een goeie plek";
//    }    
//    console.log(value2);
//    console.log(value3);
});

//      TESTING FOR ADVICES
//
//$.when($.getJSON("https://api.covid19api.com/summary"), $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=Madrid&units=metric&appid=f1f72acbd4642e54bfd47e688bcb8f51")).done(function(data1, data2) {
//    var value1, value2, value3 = (value1 + value2) /2;
//    var weather = data2.weather[0].main;
//    var temp = Math.floor(data2.main.temp);
//    var advice = document.getElementById('advice').innerHTML;
//    var cases = data1.Global.TotalConfirmed;
//    
//    if (cases >= 100000){
//        value1 = 1;
//    }else if (cases <=99999){
//        value1 = 2;  
//    }else if (cases <=50000){
//        value1 = 3;  
//    }else if (cases <=10000){
//        value1 = 4;  
//    }else if (cases <=5000){
//        value1 = 5;  
//    }    
//    
//    if (temp <= 0){
//        value2 = 1;
//    }else if (temp <= 9){
//        value2 = 2;
//    }else if (temp <=19){
//        value2 = 3;
//    }else if (temp <= 29){
//        value2 = 4;
//    }else if (temp <= 40){
//        value2 = 5;
//    }
//    
//    if (value3 <= 1.49){
//        document.getElementById('advice').innerHTML="Dit is echt een kut plek.";
//    }else if (value3 <= 2.49 ){
//        document.getElementById('advice').innerHTML="Dit is een kut plek";
//    }else if (value3 <= 3.49 ){
//        document.getElementById('advice').innerHTML="Je kan hier best landen";
//    }else if (value3 <= 4.49 ){
//        document.getElementById('advice').innerHTML="Dit is een goeie plek";
//    }else if (value3 <= 5 ){
//        document.getElementById('advice').innerHTML="Dit is echt een goeie plek";
//    }
//    console.log(value1);
//    console.log(value2);
//    console.log(value3);
//});



//ONDERBOUWING/UITLEG

//select country function
// if one of the countries is selected from the dropdown, it will request data from the covidapi and openweathermap about that country. 2 things will be done with the data. 1) it will be displayed in the grid-items. 2) the relevant data will be converted to a value in order to determine the quality of the landing spot.

//value system
//temperature and amount of coronacases get a value from 1-5, 1 being very bad and 5 being very good. the average of the two will determine the quality of the landing spot.

//temperature values: 
//-100 - 0: very bad    value: 1
//0-9:      bad         value: 2
//10-19:    okay        value: 3
//20-29:    good        value: 4
//30-40:    very good   value: 5

//corona cases values (i'm using arbitrary values just as an example. i have no idea what amounts are actually good or bad :)
//100000 or more:   very bad    value: 1
//50000-100000:     bad         value: 2
//10000-30000:      okay        value: 3
//5000-10000:       good        value: 4
//0-5000:           very good   value: 5
    
//In principe betekent het aantal cases niks, maar wel de cases vergeleken met de totale populatie. Helaas heeft de COVID-19 API geen populatiedata en kon ik niet een waarde bepalen op basis van het percentage dat COVID-19 heeft.



//Hoe dit systeem zou werken als ik meer tijd had:
//
//De gebruiker gebruikt de dropdown om een land te selecteren. Wanneer een land wordt geselecteerd maakt het script een oproep naar de 2 API's om het weer op die locatie en de informatie ivm COVID-19 in dat land te //vinden. Nadat die data is opgeroept wordt er een waarde aan toegehecht die de kwaliteit van de landingsspot bepaalt. Bijvoorbeeld: Gebruiker kiest Nederland en het systeem zoekt alle informatie op. Het blijkt dat //de weersituatie een kwaliteit van 2 heeft (slecht) en dat de Corona situatie in Nederland best goed is en dus een waarde van 4 heeft (goed). Het systeem pakt dan die twee waardes en neemt het gemiddelde ervan om de //algemene kwaliteit van de landingplaats te krijgen. In dit geval is dat 3 en dan geeft het systeem aan de gebruiker aan dat dit een middelmatige landingplaats is en legt uit waarom. 
//
//Één van de redenen dat dit niet volledig is gelukt is als volgt: Ik kon niet goed de waardes van allebei de API's samenvoegen om 1 waarde te vormen. Dit kwam vooral door wat problemen met global variables en variables in een functie. Ik probeerde dit nog te fixen door 2 API's in 1 functie op te roepen (zie regel 88) maar dit bleek met de tijd die ik had niet mogelijk te zijn.
//
//Een andere rede is omdat ik niet wist hoe ik de namen in de dropdown lijst moest linken aan de locatiedata van allebei de API's. Vandaar ook dat de app nu standaard zoekt naar het weer in Madrid en naar globale COVID-19 statistieken.
//
//In principe werkt het systeem wel, maar alleen om het weer in Madrid te laten zien, de wereldwijde COVID-19 confirmed cases, en advies dat alleen gebaseerd is op die cases en niet op het weer.