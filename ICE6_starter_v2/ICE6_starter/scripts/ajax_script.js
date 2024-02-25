console.log('ajax_script.js loaded');

// URLs for API requests
let url_posts = 'https://jsonplaceholder.typicode.com/posts';
let url_comments = 'https://jsonplaceholder.typicode.com/comments';
let url_albums = 'https://jsonplaceholder.typicode.com/albums';
let url_photos = 'https://jsonplaceholder.typicode.com/photos';
let url_todos = 'https://jsonplaceholder.typicode.com/todos';
let url_users = 'https://jsonplaceholder.typicode.com/users';

// Function to fetch data using jQuery's get method
function fetchData(url) {
    $.get(url, function(data) {
        console.log(data);
    });
}

// Fetch and log data from each URL
fetchData(url_posts);
fetchData(url_comments);
fetchData(url_albums);
fetchData(url_photos);
fetchData(url_todos);
fetchData(url_users);

// Fetch photos and display two random ones in the HTML
function displayRandomPhotos() {
    $.get(url_photos, function(photos) {
        // Ensure there are enough photos to display
        if (photos.length > 1) {
            // Select two random photos
            let randomIndexes = [];
            while (randomIndexes.length < 2) {
                let r = Math.floor(Math.random() * photos.length);
                if (randomIndexes.indexOf(r) === -1) randomIndexes.push(r);
            }
            const photo1 = photos[randomIndexes[0]];
            const photo2 = photos[randomIndexes[1]];

            // Display the selected photos
            $('#photo1').attr('src', photo1.url).parent().find('figcaption').text(photo1.title);
            $('#photo2').attr('src', photo2.url).parent().find('figcaption').text(photo2.title);
        } else {
            console.log('Not enough photos to display.');
        }
    });
}

// Call the function to display random photos
displayRandomPhotos();
