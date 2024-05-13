// Just trying javascript out

'strict'

// Getting dropdown menu
let dropdownButton = document.getElementById("dropdown-button");
let dropdownMenu = document.getElementById("dropdown-menu");


function toggleMenu() {
    let buttonExpanded = dropdownButton.getAttribute("aria-expanded") === "true";
    console.log(buttonExpanded);

    // setting the attribute of the dropdown to the opposite value of the button expanded variable.
    dropdownButton.setAttribute('aria-expanded', !buttonExpanded);

    // setting dropdown menu opposite to its current value toggling the visibility
    dropdownMenu.hidden = !dropdownMenu.hidden;
}

// close dropdown menu when clicking outside
document.addEventListener("click", function(event) {
    if(!dropdownButton.contains(event.target)) {
        dropdownButton.setAttribute("aria-expanded", "false");
        dropdownMenu.hidden = true;
    }
});


document.addEventListener("DOMContentLoaded", function() {
    // toggle dropdown menu when clicked
    dropdownButton.addEventListener('click', function() {
        toggleMenu();
    });

    // toggle dropdown menu to close once clicked again
    dropdownMenu.addEventListener('click', function() {
        toggleMenu();
    })
})


