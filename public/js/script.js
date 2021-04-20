const statesAndCities = getCityStates();

let allStates = Object.keys(statesAndCities).sort();
console.log(allStates);
$('#states').append('<option></option>');
allStates.forEach(element => {
    let $newStateRow = $(`
        <option value="${element}">${element}</option>
    `)
    $('#states').append($newStateRow);
});


function initializeCities() {
    selectedState = $('#states option:selected').val();
    cities = statesAndCities[selectedState].sort();
    $('#cities').empty();
    $('#cities').append('<option></option>');
    cities.forEach(city => {
        let $newCityRow = $(`
        <option value="${city}">${city}</option>
    `)
    $('#cities').append($newCityRow);
    })
}

$('#states').on('change', initializeCities);
$('.navbar-nav').on('click', '.nav-link', function (e) {
    console.log(e.target);
})