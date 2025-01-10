$(document).ready(function() {
    $('#generateButton').click(function() {
        let text = $('#headerText').val(); // Get the header text
        let color = $('#headerColor').val(); // Get the header color
        $('#errorMessage').text(''); // Clear previous error message

        // Validate input
        if (text === '' || !isValidColor(color)) {
            $('#errorMessage').text('Please enter valid text and color.'); // Show error message
        } else {
            // Create a new header with the specified text and color
            let newHeader = $('<h1></h1>').text(text).css('color', color);
            $('#headerContainer').append(newHeader); // Append the new header to the container
        }
    });

    // Function to check if the color is valid
    function isValidColor(color) {
        let s = new Option().style;
        s.color = color;
        return s.color !== ''; // Check if the color is valid
    }
});