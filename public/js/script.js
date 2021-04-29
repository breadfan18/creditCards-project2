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
$(document).ready(function () {
    $('.table').DataTable();
});


// Script to make the table rows clickable 
$(document).on('DOMContentLoaded', () => {
    const rows = document.querySelectorAll('tr[data-href]');
    rows.forEach(row => {
        $(row).on('click', () => {
            window.location.href = row.dataset.href;
        })
    });
})


// Script to toggle card Edit On and Off when Edit Card is clicked 
let readonly = true;
$('#editCardButton').on('click', function () {
    if ($(this).html() === 'Edit Card') {
        $('input').prop('readonly', !readonly);
        $('#accountStatusChange').css('display', 'block');
        $('#accountStatus').css('display', 'none');
        $('#cardHolderChange').css('display', 'block');
        $('#applicantOld').css('display', 'none');
        readonly = !readonly;
    } else {
        $('input').prop('readonly', true);
        $('#accountStatusChange').css('display', 'none');
        $('#accountStatus').css('display', 'block');
        $('#cardHolderChange').css('display', 'none');
        $('#applicantOld').css('display', 'block');
        $('#updateButton').prop('disabled', true);
        readonly = !readonly;
    }
    $(this).html(readonly ? 'Edit Card' : 'Cancel');
    return false;
});

// event listener to enable edit card submit button on keypress in input field
$('#cardDetails').on('keypress', 'input', function () {
    $('#updateButton').prop('disabled', false);
})

// event listener to enable edit card submit button on click on a select field
$('#cardDetails').on('click', 'select', function () {
    $('#updateButton').prop('disabled', false);
})

// listener that runs on page load, that will change closed, downgraded cards to a different color by adding class names. 
$(document).ready(function () {
    let accountStatuses = $('.status');
    accountStatuses.each(function () {
        if ($(this).text() === 'Closed') {
            $(this).closest('tr').addClass('table-danger');
        } else if ($(this).text() === 'Downgraded') {
            $(this).closest('tr').addClass('table-warning');
        }
    })
})



