let inventory = [];

function addIngredient() {
    const name = document.getElementById('ingredient-name').value;
    const quantity = parseInt(document.getElementById('initial-quantity').value);
    
    if (name && quantity) {
        inventory.push({ name: name, quantity: quantity });
        updateTable();
        document.getElementById('ingredient-name').value = '';
        document.getElementById('initial-quantity').value = '';
    }
     else {
        alert('Please enter valid ingredient name and quantity.');
    }
    if(quantity<0)
    {
        alert("Enter the valid quantity");
    }
}

function updateStock() {
    const name = document.getElementById('update-name').value;
    const quantityChange = parseInt(document.getElementById('update-quantity').value);
    
    const ingredient = inventory.find(item => item.name.toLowerCase() === name.toLowerCase());
    
    if (ingredient) {
        ingredient.quantity += quantityChange;
        if (ingredient.quantity < 10) {
            alert(`Low stock alert: ${ingredient.name}`);
        }
        updateTable();
        document.getElementById('update-name').value = '';
        document.getElementById('update-quantity').value = '';
    } else {
        alert('Ingredient not found in inventory.');
    }
    if(qunatity<=1)
    {
        alert("the quantity is 1 add the stock")
    }
}

function updateTable() {
    const tableBody = document.getElementById('inventory-table');
    tableBody.innerHTML = '';

    inventory.forEach(item => {
        const row = document.createElement('tr');
        const nameCell = document.createElement('td');
        nameCell.textContent = item.name;
        const quantityCell = document.createElement('td');
        quantityCell.textContent = item.quantity;
        row.appendChild(nameCell);
        row.appendChild(quantityCell);
        tableBody.appendChild(row);
    });
}
