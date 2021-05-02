// Initialize city and state functionality in the add user page

// First call the function for cityState.js in the helpers folder that returns the city/stage object
const statesAndCities = getCityStates();
const $states = $('#states');
const $cities = $('#cities');

// Get all the states, which are keys, and store them in allStates array. Then append each statename into the select drop down for states.
let allStates = Object.keys(statesAndCities).sort();
$states.append('<option></option>');
allStates.forEach(element => {
    let $newStateRow = $(`
        <option value="${element}">${element}</option>
    `)
    $states.append($newStateRow);
});

// Populate cities when a certain state is selected. 
function initializeCities() {
    selectedState = $('#states option:selected').val();
    cities = statesAndCities[selectedState].sort();
    $cities.empty();
    $cities.append('<option></option>');
    cities.forEach(city => {
        let $newCityRow = $(`
        <option value="${city}">${city}</option>
    `)
        $cities.append($newCityRow);
    })
}

$states.on('change', initializeCities);

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
let input = $('input');
let $accountStatusChange = $('#accountStatusChange');
let $accountStatus = $('#accountStatus');
let $cardHolderchange = $('#cardHolderChange');
let $applicationOld =  $('#applicantOld');
let $cardDetailsInputFields = $('#cardDetails input');
let $cardDetailsUpdateFields = $('#cardDetails select');
let $submitBtn = $('#updateButton');

$('#editCardButton').on('click', function () {
    if ($(this).html() === 'Edit Card') {
        input.prop('readonly', !readonly);
        $accountStatusChange.css('display', 'block');
        $accountStatus.css('display', 'none');
        $cardHolderchange.css('display', 'block');
        $applicationOld.css('display', 'none');
        $cardDetailsInputFields.css('border', '1px solid black');
        $cardDetailsUpdateFields.css('border', '1px solid black');
        readonly = !readonly;
    } else {
        input.prop('readonly', true);
        $accountStatusChange.css('display', 'none');
        $accountStatus.css('display', 'block');
        $cardHolderchange.css('display', 'none');
        $applicationOld.css('display', 'block');
        $submitBtn.prop('disabled', true);
        $cardDetailsInputFields.css('border', 'none');
        $cardDetailsUpdateFields.css('border', 'none');
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
let accountStatuses = $('.status');
$(document).ready(function () {
    accountStatuses.each(function () {
        if ($(this).text() === 'Closed') {
            $(this).closest('tr').addClass('table-danger');
        } else if ($(this).text() === 'Downgraded') {
            $(this).closest('tr').addClass('table-warning');
        }
    })
})



// function to set a given theme/color-scheme
function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}
// function to toggle between light and dark theme
function toggleTheme() {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-light');
        $('table').removeClass('table-dark').addClass('table-hover').addClass('table-striped');
        $('#switch').html('Switch to Dark Mode');
    } else {
        setTheme('theme-dark');
        $('table').addClass('table-dark').removeClass('table-hover').removeClass('table-striped').removeClass('dataTable');
        $('#switch').html('Switch to Light Mode');
    }
}

// Immediately invoked function to set the theme on initial load
(function () {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-dark');
        $('table').addClass('table-dark').removeClass('table-hover').removeClass('table-striped').removeClass('dataTable')
        $('#switch').html('Switch to Light Mode');
    } else {
        setTheme('theme-light');
        $('table').removeClass('table-dark').addClass('table-hover').addClass('table-striped')
        $('#switch').html('Switch to Dark Mode');
    }
})();

function toggleClosedAndDowngradedThemes(theme) {
    if (theme === 'dark') {
        accountStatuses.each(function () {
            if ($(this).text() === 'Closed') {
                $(this).closest('tr').removeClass('table-danger').addClass('bg-danger');
            } else if ($(this).text() === 'Downgraded') {
                $(this).closest('tr').removeClass('table-warning').addClass('bg-warning');
            }
        })

    } else if (theme === 'light') {
        accountStatuses.each(function () {
            if ($(this).text() === 'Closed') {
                $(this).closest('tr').addClass('table-danger').removeClass('bg-danger');
            } else if ($(this).text() === 'Downgraded') {
                $(this).closest('tr').addClass('table-warning').removeClass('bg-warning');
            }
        })
    }
}




// CODE FOR THE HEADER IMAGE CAROUSEL SLIDESHOW
let images = $('.headerImg');
let autoIndex = 0;
let slideshowPlaying = false;
let timeout;
let currentSlide;

autoSlideShow();

function autoSlideShow() {
    for (const image of images) {
        image.style.display = 'none';
    }
    autoIndex++;

    if (autoIndex > images.length) {
        autoIndex = 1;
    }
    if (autoIndex < 1) {
        autoIndex = images.length;
    }
    images[autoIndex - 1].style.display = "block";

    timeout = setTimeout(autoSlideShow, 10000);
    currentSlide = autoIndex;

    slideshowPlaying = true;
}


// CODE TO MAKE THE USER NAVBAR STICKY 

// listener to execute sticky code on scroll
$(document).ready(function() {
    // grab the initial top offset of the navigation 
       let stickyNavTop = $('#userNav').offset().top;
       
       // our function that decides weather the navigation bar should have "fixed" css position or not.
       let stickyNav = function(){
        let scrollTop = $(window).scrollTop(); // our current vertical position from the top
             
        // if we've scrolled more than the navigation, change its position to fixed to stick to top,
        // otherwise change it back to relative
        if (scrollTop > stickyNavTop) { 
            $('#userNav').addClass('sticky');
        } else {
            $('#userNav').removeClass('sticky'); 
        }
    };

    stickyNav();
    // and run it again every time you scroll
    $(window).scroll(function() {
        stickyNav();
    });
});