// Images API
let img_uri = 'https://api.spacexdata.com/v3/launches';
let imgArray = [];
let myImg;


init();

function init() {
    getData();
}

function getData() {
    $.ajax(img_uri)
        .then(function (data) {
            myImg = data;
            render();
        }, function (error) {
            console.log(error);
        });
}

function render() {
    console.log(myImg);
}