// Images API
let img_uri = 'https://picsum.photos/1500/200';
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
    $('.headerImg').attr('src', myImg);
    // console.log(test);
}