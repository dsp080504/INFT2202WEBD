(function() {
    // Question 1
    document.title = "Dhyey Patel - Test 2";
    document.querySelector('.navbar-brand').textContent = "Dhyey Patel";

    // Question 2
    const testTable = document.getElementById('test-table');
    const secondRow = testTable.rows[1]; // Assuming the first row is the header
    secondRow.cells[2].textContent = '100100100';

    // Question 3
    const myRow = document.createElement('tr');
    myRow.classList.add('table-info'); // For Question 5

    const firstNameCell = myRow.insertCell(0);
    firstNameCell.textContent = 'Dhyey';

    const lastNameCell = myRow.insertCell(1);
    lastNameCell.textContent = 'Patel';

    const bannerIdCell = myRow.insertCell(2);
    bannerIdCell.textContent = '100900097';

    testTable.querySelector('tbody').appendChild(myRow);

    // Question 4
    const rows = Array.from(testTable.rows);
    const aliceBobbertsRow = rows.find(row => row.cells[0].textContent === 'Alice' && row.cells[1].textContent === 'Bobberts');
    if (aliceBobbertsRow) {
        aliceBobbertsRow.remove();
    }

    // Question 6
    const adamKunzRow = rows.find(row => row.classList.contains('table-warning'));
    if (adamKunzRow) {
        adamKunzRow.classList.remove('table-warning');
    }

    // Question 7
    const johnDoeRow = rows.find(row => row.classList.contains('table-dark'));
    if (johnDoeRow) {
        johnDoeRow.classList.remove('table-dark');
        johnDoeRow.classList.add('table-success');
    }

    // Question 8
    
    // Create a container for the placeholder image and append it to the main element
    const mainContainer = document.querySelector('main');
    const imageContainer = document.createElement('div');
    imageContainer.className = 'container';

    // Create the placeholder image using holder.js syntax
    const placeholderImage = document.createElement('img');
    placeholderImage.setAttribute('data-src', 'holder.js/100x100?theme=sky');
    imageContainer.appendChild(placeholderImage);

    // Append the container with the image to the main container
    mainContainer.appendChild(imageContainer);

    // Activate Holder on the new image
    Holder.run({
        images: placeholderImage
    });
})();
