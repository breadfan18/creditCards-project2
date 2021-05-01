// Images API
let img_uri = 'https://picsum.photos/1500/200';
let imgArray = [];

init();

function init() {

    // setInterval(() => {
    //     render();
    // }, 1000);
}

// function getData() {
//     // $.ajax(img_uri)
//     //     .then(function (data) {
//     //         myImg = data;
//     //         render();
//     //     }, function (error) {
//     //         console.log(error);
//     //     });

//     for (let i = 0; i < 10; i++) {
//         $.ajax(img_uri)
//             .then(function (img) {
//                     imgArray.push(img);
//                 },
//                 function (error) {
//                     console.log(error);
//                 });
//     }
//     setTimeout(() => {
//         render();
//     }, 2000);
// }

function render() {
    // console.log('test');
    // console.log(imgArray);

    
        $('.headerImg').attr('src', 'https://picsum.photos/1500/200');

    // $('.headerImg').attr('src', 'https://picsum.photos/1500/200');
}