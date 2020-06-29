//COVIDAPI
$.getJSON("https://api.covid19api.com/summary", function(data){
    console.log(data);
    var cases = data.Global.TotalConfirmed;
//    var populationPercentage = ;
    var advice = document.getElementById('advice').innerHTML;
    console.log(cases);
    $('.cases').append(cases);
    
    
    
    if (cases>=5000){
        document.getElementById('advice').innerHTML="Because of the numerous cases of COVID-19 in this country, it is not recommended as a landing spot.";
    }else{
        document.getElementById('advice').innerHTML="This country is deemed relatively safe from COVID-19, therefore it will be a suitable landing spot.";
    }
    
});

//WEATHERAPI
$.getJSON("http://api.openweathermap.org/data/2.5/weather?id=2747373&units=metric&appid=f1f72acbd4642e54bfd47e688bcb8f51", function(data){
    console.log(data);
    
    var icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png"; 
    var weather = data.weather[0].main;
    var temp = Math.floor(data.main.temp);
    
//  console.log(icon);
    
    $('.icon').attr('src', icon);
    $('.weather').append(weather);
    $('.temp').append(temp);
});

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

//corona cases values (i'm using arbitrary just as an example. i have no idea what amounts are actually good or bad.)
//10000 or more: very bad    value: 1
//8000-10000:    bad         value: 2
//6000-8000:     okay        value: 3
//4000-6000:     good        value: 4
//0-4000:        very good   value: 5