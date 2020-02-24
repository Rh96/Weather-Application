// Call Api Weather
$.ajax({
    url: 'http://api.openweathermap.org/data/2.5/forecast?q=skopje&appid=d9d0542193e6b91dff715aa24d75cb02&units=metric',
    success: function (response){
        console.log('The request succeeded!');
        showData(response.list);
        temperature(response.list);
        humidity(response.list);
    },
    error: function (response){
        console.log('The request failed!');
        console.log(response.responseText)
    }
});


function showData(data){
    let weatherData = '';
    for(let i = 0; i < data.length; i++){
        weatherData += '<tr>';
        weatherData += "<td><img src='https://openweathermap.org/img/wn/"+data[i].weather[0].icon+"@2x.png'></img></td>";
        weatherData += '<td>'+data[i].weather[0].description+'</td>';
        weatherData += '<td>'+new Date(data[i].dt * 1000)+'</td>';
        weatherData += '<td>'+data[i].main.temp+'</td>';
        weatherData += '<td>'+data[i].main.humidity+'</td>';
        weatherData += '<td>'+data[i].wind.speed+'</td>';
        weatherData += '</tr>';
    }
    $('#weather-data').append(weatherData);
}

function temperature(data){
    let sum = 0;
    let arrayTemp = [];

    // Getting Max and Min Temperature
    for(let i = 0; i < data.length; i++){
        arrayTemp.push(data[i].main.temp);
    }

    let maxTemp = Math.max(...arrayTemp);
    let minTemp = Math.min(...arrayTemp);

    document.getElementById('maximum-temp').innerHTML = Math.round(maxTemp);
    document.getElementById('minimum-temp').innerHTML = Math.round(minTemp);

    let maxTempDate = 0;
    let minTempDate = 0;

    for(let i = 0; i < data.length; i++){
        if(data[i].main.temp === maxTemp){
            maxTempDate = new Date(data[i].dt * 1000);

        } else if(data[i].main.temp === minTemp){
            minTempDate = new Date(data[i].dt * 1000);
        }
    }

    // Warmest and Coldest time
    document.getElementById('warmest-temp').innerHTML = '(' +Math.round(maxTemp)+ ')' + ' on ' +maxTempDate;
    document.getElementById('lowest-temp').innerHTML ='(' + Math.round(minTemp)+ ')' + ' on ' +minTempDate;

    // Sum temperature and get average sum / data.length
    for(let j = 0; j < arrayTemp.length; j++){
            sum += arrayTemp[j];
    }
    let averageTemp = sum / arrayTemp.length;
    document.getElementById('average-temp').innerHTML = Math.round(averageTemp);

    // Using methods
    // let temperatures = data.map(v => v.main.temp);
    //     // console.log(data.main.temp);
    //     console.log(Math.max(...temperatures));
    //     console.log(Math.min(...temperatures));
    //     let result = temperatures.reduce(function(sum, elem){
    //         return sum + elem;
    //     }, 0);
    // document.getElementById('result-temperatures').innerHTML = 'Average temperature: ' + result / temperatures.length;
}

function humidity(data){
    let sum = 0;
    let arrayHumidity = [];

    // Getting Max and Min humidity
    for(let i = 0; i < data.length; i++){
        arrayHumidity.push(data[i].main.humidity);
        // console.log(arrayHumidity);
    }
    let maxHumidity = Math.max(...arrayHumidity);
    let minHumidity = Math.min(...arrayHumidity);

    document.getElementById('maximum-humidity').innerHTML = Math.round(maxHumidity);
    document.getElementById('minimum-humidity').innerHTML = Math.round(minHumidity);

    // Sum humidity and get average sum / data.length
    for(let j = 0; j < arrayHumidity.length; j++){
        sum += arrayHumidity[j];
    }
    let averageHumidity = sum / data.length;
    document.getElementById('average-humidity').innerHTML = Math.round(averageHumidity);
}