//Model Section
let shoppingList;


const localStorageShoppingList = JSON.parse(localStorage.getItem('shoppingList'));

if (Array.isArray(localStorageShoppingList)) {
    shoppingList = localStorageShoppingList;
} else {
    shoppingList = [{ id: '1', title: 'milk', dueDate: new Date() }, { id: '2', title: 'bread', dueDate: new Date() }];
}

function createListItem(listItemtitle, listItemDueDate) {
    const newId = '' + new Date().getTime();

    shoppingList.push({
        id: newId,
        title: listItemtitle,
        dueDate: listItemDueDate
    });

}

function deleteListItem(idToDelete) {
    shoppingList = shoppingList.filter(function (listItem) {
        if (idToDelete === listItem.id) {
            return false;
        } else {
            return true;
        }
    });
}

const deleteAllItems = () => {
    shoppingList.length = 0;
}


renderShoppingList();


// Controller Section
function addToList() {

    const slItemTitle = document.getElementById('sl-item').value;
    const slDateItem = document.getElementById('sl-date').value;

    createListItem(slItemTitle, slDateItem);

    saveAllShoppingList();

    renderShoppingList();
}

function removeFromList(event) {
    const deleteButtonClicked = event.target;
    const idToDelete = deleteButtonClicked.id;

    deleteListItem(idToDelete);

    saveAllShoppingList();

    renderShoppingList();
}

function saveAllShoppingList() {
    localStorage.setItem('shoppingList', JSON.stringify(shoppingList));
}

const clearAllListItems = () => {

    deleteAllItems();

    saveAllShoppingList();

    renderShoppingList();
}

// View
function renderShoppingList() {

    document.getElementById('shopping-list-table-body').innerHTML = '';

    shoppingList.forEach(function (listItem) {

        const shoppingListTable = document.getElementById('shopping-list-table-body');
        const tableRow = document.createElement('tr');

        const newTableRow = shoppingListTable.appendChild(tableRow);

        const titleElement = document.createElement('td');
        newTableRow.appendChild(titleElement);
        titleElement.innerText = listItem.title;


        const dueDateElement = document.createElement('td');
        newTableRow.appendChild(dueDateElement);
        dueDateElement.innerText = listItem.dueDate;

        const deleteElement = document.createElement('td');
        const deleteButtonRow = newTableRow.appendChild(deleteElement);
        const deleteItemButton = document.createElement('button');
        deleteButtonRow.append(deleteItemButton);


        deleteItemButton.innerText = 'Delete';
        deleteItemButton.style = 'margin-left: 12px btn';
        deleteItemButton.className = 'btn btn-danger';
        deleteItemButton.onclick = removeFromList;
        deleteItemButton.id = listItem.id;

    });
}

function renderShoppingListTable() {
    document.getElementById('shopping-list-table').innerHTML = '';

    const titleElement = document.createElement('tr').createElement('td');
    titleElement.innerText = listItem.title;

}