$(document).ready(function() {
    // Get the boxes with jQuery and loop through each box
    $('.red-box, .green-box, .blue-box').each(function() {
        var currentClass = $(this).attr('class');

        // Change the class of each box, reordering the colors
        if (currentClass === 'red-box') {
            $(this).removeClass('red-box').addClass('blue-box');
        } else if (currentClass === 'blue-box') {
            $(this).removeClass('blue-box').addClass('green-box');
        } else if (currentClass === 'green-box') {
            $(this).removeClass('green-box').addClass('red-box');
        }
    });

    // Create a button to open a modal
    var modalButton = $('<button/>', {
        text: 'Open Modal',
        id: 'openModal'
    });

    // Add the button to the page
    $('#content').append(modalButton);

    // Add a click event listener to the button
    $('#openModal').click(function() {
        $('.lightbox').show(); // Show the modal
    });

    // Initially hide the modal
    $('.lightbox').hide();
});
