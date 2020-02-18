// Call Api Weather
$.ajax({
    url: 'http://api.openweathermap.org/data/2.5/forecast?q=skopje&appid=d9d0542193e6b91dff715aa24d75cb02',
    success: function (response){
        console.log('The request succeeded!');
        showData(response.list);
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
        weatherData += '<td>'+data[i].weather[0].icon+'</td>';
        weatherData += '<td>'+data[i].weather[0].description+'</td>';
        weatherData += '<td>'+new Date(data[i].dt * 1000)+'</td>';
        weatherData += '<td>'+data[i].main.temp+'</td>';
        weatherData += '<td>'+data[i].main.humidity+'</td>';
        weatherData += '<td>'+data[i].wind.speed+'</td>';
        weatherData += '</tr>';
    }
    $('#weather-data').append(weatherData);
}