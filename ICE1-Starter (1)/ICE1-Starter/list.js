// ADDING ITEMS TO START AND END OF LIST
// Get the <ul> element
var list = document.querySelector('ul');

// ADD NEW ITEM TO END OF LIST
// Create element
var newElementEnd = document.createElement('li');
// Create text node
var newTextEnd = document.createTextNode('cream');
// Add text node to element
newElementEnd.appendChild(newTextEnd);
// Add element end of list
list.appendChild(newElementEnd);

// ADD NEW ITEM START OF LIST
// Create element
var newElementStart = document.createElement('li');
// Create text node
var newTextStart = document.createTextNode('kale');
// Add text node to element
newElementStart.appendChild(newTextStart);
// Add element to start of list
list.insertBefore(newElementStart, list.firstChild);

// All <li> elements
var items = document.querySelectorAll('li');

// ADD A CLASS OF COOL TO ALL LIST ITEMS
// Counter variable
var i;
// Loop through elements
for (i = 0; i < items.length; i++) {
    // Change class to cool
    items[i].className = 'cool';
}

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
// h2 element
var header = document.querySelector('h2');
// h2 text
var headerText = 'Buy groceries';
// No. of <li> elements
var itemCount = items.length;
// Content
var newHeaderText = headerText + ' (' + itemCount + ' items)';
// Update h2 using innerHTML (not textContent) because it contains markup
header.innerHTML = newHeaderText;
