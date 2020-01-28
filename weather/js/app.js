// Take pages by id 
let firstPage = document.querySelector('#home-statistics').style.display = 'none';
let secondPage = document.querySelector('#hourly-weather').style.display = 'none';
let thirdPage = document.querySelector('#about-us').style.display = 'none';

// Functions
function showHidePages(){
    $(document).ready(function(){
        $('#firstPage').click(function(){
            $('#home-statistics').show();
            $('#hourly-weather').hide();
            $('#about-us').hide();
        })
    })
    $(document).ready(function(){
        $('#secondPage').click(function(){
           $('#hourly-weather').show();
           $('#home-statistics').hide();
           $('#about-us').hide();
        })
    })
    $(document).ready(function(){
        $('#thirdPage').click(function(){
            $('#about-us').show();
            $('#home-statistics').hide();
            $('#hourly-weather').hide();
        })
    })
}
showHidePages();
