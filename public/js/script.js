
// Initialize city and state functionality in the add user page

// First call the function for cityState.js in the helpers folder that returns the city/stage object
const statesAndCities = getCityStates();

// Get all the states, which are keys, and store them in allStates array. Then append each statename into the select drop down for states.
let allStates = Object.keys(statesAndCities).sort();
$('#states').append('<option></option>');
allStates.forEach(element => {
    let $newStateRow = $(`
        <option value="${element}">${element}</option>
    `)
    $('#states').append($newStateRow);
});

// Populate cities when a certain state is selected. 
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

// Initilize DataTables CDN 
$(document).ready( function () {
    $('.table').DataTable();
} );


// Script to make the table rows clickable 
$(document).on('DOMContentLoaded', () => {
    const rows = document.querySelectorAll('tr[data-href]');
    console.log(rows);

    rows.forEach(row => {
        $(row).on('click', () => {
            window.location.href = row.dataset.href;
        })
    });
})


// document.addEventListener('DOMContentLoaded', () => {
//     const rows = document.querySelectorAll('tr[data-href]');
//     console.log(rows);

//     rows.forEach(row => {
//         row.addEventListener('click', () => {
//             window.location.href = row.dataset.href;
//         })
//     });
// })