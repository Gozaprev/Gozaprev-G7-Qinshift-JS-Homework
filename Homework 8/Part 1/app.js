$(document).ready(function() {
    $('#greetButton').click(function() {
        var name = $('#nameInput').val(); // Get the value from the input
        if (name) {
            $('#greetMessage').text('Hello there ' + name + '!'); // Set the greeting message
        } else {
            $('#greetMessage').text(''); // Clear the message if input is empty
        }
    });
});