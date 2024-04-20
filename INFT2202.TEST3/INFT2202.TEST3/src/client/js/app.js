// This line should configure the submit handler for your form.
// It should use the submitAnimalForm method below.
document.getElementById('yourFormId').addEventListener('submit', submitAnimalForm);

// This line should get the list of available animals, then render the table when the page loads.
// It should use the getAnimals and renderAnimalTable methods below.
document.addEventListener('DOMContentLoaded', async function() {
    const animals = await getAnimals();
    renderAnimalTable(animals);
});

function renderAnimalTable(arrayOfAnimals) {
    const tableContainer = document.getElementById('retrieve-container');
    // Clear the container before adding new content
    tableContainer.innerHTML = '';
    
    if (arrayOfAnimals.length === 0) {
        tableContainer.textContent = 'There are currently no animals.';
    } else {
        const table = document.createElement('table');
        table.className = 'table'; // Bootstrap class for styling
        // Add table headers and rows based on arrayOfAnimals
        // ...
        tableContainer.appendChild(table);
    }
}

async function submitAnimalForm(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const animalData = {};
    
    for (let [key, value] of formData.entries()) {
        animalData[key] = value;
    }
    
    // Perform your data validation here before posting
    // ...
    
    try {
        const newAnimal = await postAnimal(animalData);
        // Hide error message if there was one
        // Update the list of animals if successful
        // ...
    } catch (error) {
        // Show error message
        // ...
    }
}

async function postAnimal(animalData) {
    const response = await fetch('/api/animal', {
        method: 'POST',
        headers: new Headers({'Content-Type': 'application/json'}),
        body: JSON.stringify(animalData)
    });
    
    if (!response.ok) {
        throw new Error('Problem posting animal data');
    }
    
    return response.json();
}

async function getAnimals() {
    try {
        const response = await fetch('/api/animal', {
            method: 'GET'
        });
        if (!response.ok) {
            throw new Error('Problem fetching animals');
        }
        return response.json();
    } catch (error) {
        return { error: error.message };
    }
}
