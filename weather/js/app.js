// Take pages by id 
let firstPage = document.querySelector('#home-statistics').style.display = 'none';
let secondPage = document.querySelector('#hourly-weather').style.display = 'none';
let thirdPage = document.querySelector('#about-us').style.display = 'none';

// Functions
function showHidePages(){
    $(document).ready(function(){
        $('#firstPage').click(function(){
            $('#home-statistics').toggle();
        })
    })
    $(document).ready(function(){
        $('#secondPage').click(function(){
            $('#hourly-weather').toggle();
        })
    })
    $(document).ready(function(){
        $('#thirdPage').click(function(){
            $('#about-us').toggle();
        })
    })
}
showHidePages();
