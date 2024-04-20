$(document).ready(function() {
//     // Question 1: Update titles and footer
//     $('title').text('Dhyey Patel - Test 2');
//     $('.navbar-brand').text('Dhyey Patel');
//     $('footer .container').text('© ' + new Date().getFullYear());

//     // Question 2: Update the student number
//     $('#test-table tbody tr:eq(1) td:last').text('100100100');

//     // Question 3: Add a new row with personal information
//     var $row = $('<tr>').append(
//         $('<td>').text('Dhyey'),
//         $('<td>').text('Patel'),
//         $('<td>').text('100900097')
//     );
//     $('#test-table tbody').append($row);

//     // Question 4: Remove Alice Bobberts from the table
//     $('#test-table tbody tr').filter(function() {
//         return $(this).find('td').eq(0).text() === 'Alice' && $(this).find('td').eq(1).text() === 'Bobberts';
//     }).remove();

//     // Question 5: Add the .table-info class to your personal row
//     $row.addClass('table-info');

//     // Question 6: Remove the .table-warning class from Adam Kunz's row
//     $('#test-table tbody tr').removeClass('table-warning');

//     // Question 7: Change .table-dark to .table-success for John Doe's row
//     $('#test-table tbody tr').filter(function() {
//         return $(this).find('td').eq(0).text() === 'John' && $(this).find('td').eq(1).text() === 'Doe';
//     }).removeClass('table-dark').addClass('table-success');

//     // Question 8: Add a Bootstrap card
//     var $container = $('<div>').addClass('container');
//     var $card = $('<div>').addClass('card');
//     var $image = $('<img>').addClass('card-img-top').attr('data-src', 'holder.js/100px180/').attr('alt', 'Card image');
//     var $cardBody = $('<div>').addClass('card-body');
//     var $cardTitle = $('<h5>').addClass('card-title').text('Dhyey Patel');
//     var $cardText = $('<p>').addClass('card-text').text('A sentence or two about yourself.');
//     var $cardLink = $('<a>').addClass('btn btn-primary').attr('href', '#').text('Learn More');

//     $cardBody.append($cardTitle, $cardText, $cardLink);
//     $card.append($image, $cardBody);
//     $container.append($card);
//     $('main').append($container);

//     // Render the image using Holder.js
//     Holder.run({
//         images: $image[0]
//     });
});
