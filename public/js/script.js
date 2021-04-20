const statesAndCities = getCityStates();

let allStates = Object.keys(statesAndCities).sort();
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

$(document).ready( function () {
    $('#cardsTable').DataTable();
} );