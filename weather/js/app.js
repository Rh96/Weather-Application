// Take pages by id 
let firstPage = document.querySelector('#firstPage');
let secondPage = document.querySelector('#secondPage');
let thirdPage = document.querySelector('#thirdPage');

// Functions
function showHidePages(){
    $('#firstPage').click(function(){
        $('#home-statistics').show();
        $('#home-statistics').hide();
    })
}
showHidePages();