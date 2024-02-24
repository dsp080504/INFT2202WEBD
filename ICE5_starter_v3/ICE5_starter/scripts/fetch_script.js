console.log('fetch_script.js loaded');

let url_posts = 'https://jsonplaceholder.typicode.com/posts';
let url_comments = 'https://jsonplaceholder.typicode.com/comments';
let url_albums = 'https://jsonplaceholder.typicode.com/albums';
let url_photos = 'https://jsonplaceholder.typicode.com/photos';
let url_todos = 'https://jsonplaceholder.typicode.com/todos';
let url_users = 'https://jsonplaceholder.typicode.com/users';

// Function to fetch data from URL
function fetchData(url) {
    fetch(url)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error fetching data:', error));
}

// Call the fetch function for each URL and log the results
console.log('Fetching posts...');
fetchData(url_posts);

console.log('Fetching comments...');
fetchData(url_comments);

console.log('Fetching albums...');
fetchData(url_albums);

console.log('Fetching photos...');
fetchData(url_photos);

console.log('Fetching todos...');
fetchData(url_todos);

console.log('Fetching users...');
fetchData(url_users);

// Fetch two random photos and insert them into img elements in the HTML
fetch(url_photos)
    .then(response => response.json())
    .then(photos => {
        // Assuming you have two img elements with IDs 'photo1' and 'photo2'
        const randomIndices = [];
        while(randomIndices.length < 2){
            let r = Math.floor(Math.random() * photos.length);
            if(randomIndices.indexOf(r) === -1) randomIndices.push(r);
        }

        document.getElementById('photo1').src = photos[randomIndices[0]].url;
        document.getElementById('photo2').src = photos[randomIndices[1]].url;
    })
    .catch(error => console.error('Error fetching photos:', error));

